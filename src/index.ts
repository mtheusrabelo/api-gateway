import handler from './infrastructure/handler';

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req) {
    return handler(req);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
