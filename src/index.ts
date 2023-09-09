const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(`Bun! ${req.url}`);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
