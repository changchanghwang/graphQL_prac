import { User } from "../../services/user/domain/model";
import { Query } from "type-graphql";
import userService from '../../services/user/application/services'


export class UserResolver{
    @Query((returns)=> [User])
    async users(){
        return userService.list()
    }
}