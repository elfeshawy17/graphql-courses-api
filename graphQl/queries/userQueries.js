import { GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { userSchema } from '../schemas/userSchema.js';
import { User } from './../../data/models/user.js';

export const userQueries = {
    allUsers: {
        type: new GraphQLList(userSchema),
        resolve: async () => {
            const users = await User.find().populate('posts');
            return users;
        }
    },
    user: {
        type: userSchema,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: async (parent, { id }) => {
            const user = await User.findById(id).populate('posts');
            return user;
        }
    },
    isUserExist: {
        type: GraphQLBoolean,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (parent, { id }) => isUserExist(id)
    }
}

async function isUserExist (id) {
    const exist = await User.findById(id);
    if (exist) return true;
    return false;
}
