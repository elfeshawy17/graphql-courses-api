import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { userSchema } from "./userSchema.js";
import { User } from "../../data/models/user.js";

export const postSchema = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: {
            type: userSchema,
            resolve: async (parent) => {
                return await User.findById(parent.id);
            }
        }
    })
});
