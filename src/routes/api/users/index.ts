import * as Router from 'koa-joi-router'
import get from "./get";
import post from "./post";


export const userRouter = Router()
userRouter.route([get,post])