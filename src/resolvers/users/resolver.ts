import { User } from "../../services/user/domain/model";
import { Arg, Mutation, Query } from "type-graphql";
import userService from '../../services/user/application/services'


export class UserResolver{
    @Query((returns)=> [User])
    async users(){
        return userService.list()
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name',(type) => String) name:string,
        @Arg('password',(type) => String) password:string
    ){
        return userService.signUp(name,password)
    }
}