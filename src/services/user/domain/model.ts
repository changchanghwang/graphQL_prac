import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type UserCtorType = { name: string; password: string };

@Entity('user')
@ObjectType()
export class User {
  @Field((type)=>Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  password!: string;

  private constructor(args: UserCtorType) {
    if(args){
      this.name = args.name;
      this.password = args.password;
    }
  }

  static of(args: UserCtorType) {
    return new User(args);
  }
}
