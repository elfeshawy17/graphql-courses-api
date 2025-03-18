import { model, Schema, Types } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

export const Post = model('Post', postSchema);