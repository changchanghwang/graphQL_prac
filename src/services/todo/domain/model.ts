import { Entity, PrimaryColumn, Column } from 'typeorm';

export type TodoCtorType = {
  title: string;
  body: string;
};

@Entity()
export class Todo {
  @PrimaryColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  body!: string;

  private constructor(args: TodoCtorType) {
    this.title = args.title;
    this.body = args.body;
  }

  static from(args: TodoCtorType) {
    return new Todo(args);
  }
}
