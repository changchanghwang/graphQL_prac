import { Spec } from "koa-joi-router";
import userService from "../../../services/user/application/services";

export default {
    path: '/api/users',
    method: 'GET',
    handler: async (ctx) => {
      return await userService.list()
    },
  } as Spec;