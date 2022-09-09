import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import * as gracefulShutdown from 'http-graceful-shutdown';
import { globalRouter } from './routes';

(async () => {
  const app = new Koa();

  app.use(koaBody({ multipart: true, jsonLimit: 10 * 1024 * 1024 })); // 10MB

  /**
   * Route middleware
   */
  app.use(globalRouter.middleware());

  const server = app.listen(3000);

  gracefulShutdown(server, {
    signals: 'SIGINT SIGTERM',
    timeout: 30000,
    onShutdown: async () => {
      console.log('The server shuts down when the connection is cleaned up.');
      // await conn.close();
    },
    finally: () => {
      console.log('bye 👋');
      process.exit();
    },
  });

  console.log('Server running on port 3000');
})();
