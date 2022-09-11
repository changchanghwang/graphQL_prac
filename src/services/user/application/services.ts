import { Service } from "typedi";
import { User } from "../domain/model";
import { getUserRepository } from "../infrastructure/repositories";

@Service()
class UserService{

    async list(){
        const userRepository = getUserRepository();
        return await userRepository.find()
    }

    async signUp(name:string,password:string){
        const userRepository = getUserRepository();
        const user = User.of({name,password})
        return await userRepository.save(user)
    }
}

export default new UserService()