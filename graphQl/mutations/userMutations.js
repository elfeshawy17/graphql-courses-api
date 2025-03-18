import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { User } from "../../data/models/user.js";
import { userSchema } from "../schemas/userSchema.js";
import { Post } from "../../data/models/post.js";

export const userMutations = {
    addUser: {
        type: userSchema,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: async (_, args) => {
            const user = new User(args);
            await user.save();
            return user;
        }
    },
    updateUser: {
        type: userSchema,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: async (_, { id, name }) => {
            return await User.findByIdAndUpdate(id, { name }, { new: true });
        }
    },
    deleteUser: {
        type: GraphQLString,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: async (_, { id }) => {
            await Post.deleteMany({ author: id });
            await User.findByIdAndDelete(id);
            return 'User is deleted successfully.'
        }
    }
}
