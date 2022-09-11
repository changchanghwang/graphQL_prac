import { Field, InputType, ArgsType, Int } from 'type-graphql';
import { ArrayMinSize } from 'class-validator';

@InputType()
export class UserMutation{
    @Field()
    name!: string;

    @Field()
    password!:string;
}