import * as Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchema, ResolverData } from 'type-graphql';
import {UserResolver} from './resolvers';
import { formatError } from './lib/response/gql-formatter';

export default async () => {
    /**
     * type-graphql
     */
    const gqlSchema = await buildSchema({
        resolvers: [UserResolver],
    });

    /**
     * apollo
     */
    return new ApolloServer({
        schema: gqlSchema,
        formatError,
        debug: true,
    });
};