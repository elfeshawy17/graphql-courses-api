import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { postSchema } from '../schemas/postSchema.js';
import { Post } from './../../data/models/post.js';

export const postQueries = {
    allPosts: {
        type: new GraphQLList(postSchema),
        resolve: async () => await Post.find().populate('author')
    },
    post: {
        type: postSchema,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: async (parent, { id }) => {
            const post = await Post.findById(id).populate('author');
            return post;
        }
    }
}
