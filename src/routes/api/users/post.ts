
import { Spec } from 'koa-joi-router';
import UserService from '../../../services/user/application/services';

export default {
  path: '/api/users',
  method: 'post',
  handler: async (ctx) => {
    const { name, password } = ctx.request.body;

      await UserService.signUp(name, password);
      return (ctx.body = {
        success: true,
      });
  },
} as Spec;