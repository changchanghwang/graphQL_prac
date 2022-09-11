import 'reflect-metadata'
import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import * as gracefulShutdown from 'http-graceful-shutdown';
import { globalRouter } from './routes/api';
import { createConnection } from 'typeorm';
import entities from './entities';
import { getConfig } from './config';
import apolloServer from './apollo-server';

const ormconfig = getConfig('/ormconfig');

(async () => {
  const conn = await createConnection({
    ...ormconfig,
    entities,
  });

  const app = new Koa();
  const graphqlServer = await apolloServer()

  app.use(koaBody({ multipart: true, jsonLimit: 10 * 1024 * 1024 })); // 10MB

  /**
   * Route middleware
   */
  app.use(globalRouter.middleware());
  await graphqlServer.start()
  app.use(graphqlServer.getMiddleware()); // path: /graphql

  const server = app.listen(3000);

  gracefulShutdown(server, {
    signals: 'SIGINT SIGTERM',
    timeout: 30000,
    onShutdown: async () => {
      console.log('The server shuts down when the connection is cleaned up.');
      await conn.close();
    },
    finally: () => {
      console.log('bye 👋');
      process.exit();
    },
  });

  console.log('Server running on port 3000');
})();
