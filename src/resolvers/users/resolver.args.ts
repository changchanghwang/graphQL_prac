// import { Field, InputType, ArgsType, Int } from 'type-graphql';
// import { ArrayMinSize } from 'class-validator';
// import { GqlOrderValue, PaginationArgs } from '../../helper/type';

// @InputType()
// export class BinOrder {
//     @Field({ nullable: true })
//     regionId?: GqlOrderValue;

//     @Field({ nullable: true })
//     serial?: GqlOrderValue;
// }

// @ArgsType()
// export class GetBinsArgs extends PaginationArgs {
//     @Field({ nullable: true })
//     serialLike?: string;

//     @Field((type) => [Int], { nullable: true })
//     @ArrayMinSize(1)
//     ids?: number[];

//     @Field((type) => [Int], { nullable: true })
//     @ArrayMinSize(1)
//     regionIds?: number[];

//     @Field((type) => Int, { nullable: true })
//     isRegionIdNot?: number;

//     @Field((type) => BinOrder, { nullable: true })
//     order?: BinOrder;
// }