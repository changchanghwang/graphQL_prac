import { Entity, PrimaryColumn, Column } from 'typeorm';

export type UserCtorType = { name: string; password: string };

@Entity()
export class User {
  @PrimaryColumn()
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
