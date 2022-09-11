import * as Router from 'koa-joi-router';
import { userRouter } from './users';
export const globalRouter = Router();

// NOTE: 일단 ping을 제외한 route에서 트랜잭션을 수행한다.
globalRouter.get('/ping', async (ctx) => {
  ctx.body = 'pong';
});

globalRouter.use(userRouter.middleware())