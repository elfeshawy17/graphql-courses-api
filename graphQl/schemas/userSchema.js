import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { postSchema } from "./postSchema.js";
import { Post } from "../../data/models/post.js";


export const userSchema = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        posts: {
            type: new GraphQLList(postSchema),
            resolve: async (parent) => {
                return await Post.find({author: parent.id});
            }
        }
    })
});