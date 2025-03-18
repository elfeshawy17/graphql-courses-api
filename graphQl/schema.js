import { userQueries } from './queries/userQueries.js';
import { userMutations } from './mutations/userMutations.js';
import { postQueries } from './queries/postQueries.js';
import { postMutations } from './mutations/postMutations.js';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';

const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ...userQueries,
        ...postQueries
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...userMutations,
        ...postMutations
    }
});

export const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: mutation
});
