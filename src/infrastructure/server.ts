import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import * as handler from './routes';

const app = new Elysia();

app.use(swagger());

app.get('/healthcheck', handler.getHealthcheck);
app.get('/something', handler.doSomething);

export const run = (port: number) => {
  app.listen(port);
  console.log(`Listening on http://localhost:${port}`);
}
