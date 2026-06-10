import http from "node:http";
import net from "node:net";

const port = Number(process.env.PRIVATE_PROXY_PORT ?? 5185);
const target = new URL(process.env.PRIVATE_PROXY_TARGET ?? "http://127.0.0.1:5174");
const username = process.env.PRIVATE_PROXY_USER;
const password = process.env.PRIVATE_PROXY_PASS;

if (!username || !password) {
  throw new Error("PRIVATE_PROXY_USER and PRIVATE_PROXY_PASS are required.");
}

const expectedAuth = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;

const unauthorized = (res) => {
  res.writeHead(401, {
    "Content-Type": "text/plain; charset=utf-8",
    "WWW-Authenticate": 'Basic realm="Prosperity Platform"',
  });
  res.end("Authentication required.");
};

const isAuthorized = (req) => req.headers.authorization === expectedAuth;

const stripHopByHopHeaders = (headers) => {
  const nextHeaders = { ...headers };
  for (const header of [
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
  ]) {
    delete nextHeaders[header];
  }
  return nextHeaders;
};

const server = http.createServer((req, res) => {
  if (!isAuthorized(req)) {
    unauthorized(res);
    return;
  }

  const proxyReq = http.request(
    {
      hostname: target.hostname,
      port: target.port || 80,
      method: req.method,
      path: req.url,
      headers: {
        ...stripHopByHopHeaders(req.headers),
        host: target.host,
      },
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode ?? 502, stripHopByHopHeaders(proxyRes.headers));
      proxyRes.pipe(res);
    },
  );

  proxyReq.on("error", () => {
    res.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Could not reach local site.");
  });

  req.pipe(proxyReq);
});

server.on("upgrade", (req, socket, head) => {
  if (!isAuthorized(req)) {
    socket.write(
      'HTTP/1.1 401 Unauthorized\r\nWWW-Authenticate: Basic realm="Prosperity Platform"\r\n\r\n',
    );
    socket.destroy();
    return;
  }

  const upstream = net.connect(Number(target.port || 80), target.hostname, () => {
    upstream.write(
      `${req.method} ${req.url} HTTP/${req.httpVersion}\r\n` +
        Object.entries({ ...req.headers, host: target.host })
          .map(([key, value]) => `${key}: ${value}`)
          .join("\r\n") +
        "\r\n\r\n",
    );
    upstream.write(head);
    upstream.pipe(socket);
    socket.pipe(upstream);
  });

  upstream.on("error", () => socket.destroy());
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Private proxy listening on http://127.0.0.1:${port}`);
  console.log(`Proxying ${target.href}`);
});
