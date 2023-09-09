import * as server from './infrastructure/server';

const port = Number(process.env.PORT) || 3000;

server.run(port);
