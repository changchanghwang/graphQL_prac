
import * as Joi from '@hapi/joi'
import { Spec } from 'koa-joi-router';
import UserService from '../../../services/user/application/services';

const bodySchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required()
})

export default {
  path: '/api/users',
  method: 'post',
  validate:{
    type:'json',
    body:bodySchema
  },
  handler: async (ctx) => {
    const { name, password } = ctx.request.body!;

      await UserService.signUp(name as string, password as string);
      return (ctx.body = {
        success: true,
      });
  },
} as Spec;