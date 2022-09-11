import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type UserCtorType = { name: string; password: string };

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

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
