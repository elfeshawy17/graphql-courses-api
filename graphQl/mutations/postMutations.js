import { User } from '../../data/models/user.js';
import { postSchema } from '../schemas/postSchema.js';
import { Post } from './../../data/models/post.js';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

export const postMutations = {
    addPost: {
        type: postSchema,
        args: {
            title: { type: new GraphQLNonNull(GraphQLString) },
            body: {  type: new GraphQLNonNull(GraphQLString)  },
            author: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: async (_, { title, body, author }) => {
            const post = new Post({ title, body, author });
            await post.save();
            await User.findByIdAndUpdate(author, { $push: { posts: post.id } });
            return post;
        }
    },
    updatePost: {
        type: postSchema,
        args: {
            id : { type: new GraphQLNonNull(GraphQLID) },
            title: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: async (_, { id, title }) => {
            return await Post.findByIdAndUpdate(id, { title }, { new: true });
        }
    },
    deletePost: {
        type: GraphQLString,
        args: {
            id : { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: async (_, { id }) => {
            const post = await Post.findById(id);
            await User.findByIdAndUpdate(post.author, { $pull: { posts: post.id } });
            await Post.findByIdAndDelete(id);
            return 'Post is deleted successfully.'
        }
    }
}
