import { AbstractRepository, EntityRepository, getCustomRepository } from "typeorm";
import { User } from "../domain/model";


@EntityRepository(User)
class UserRepository extends AbstractRepository<User> {
  save(user:User) {
    return this.manager.save(user);
  }

  find(){
      return this.repository.find()
  }
}

export const getUserRepository = () => {
    return getCustomRepository(UserRepository);
  };