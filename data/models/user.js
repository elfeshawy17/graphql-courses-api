import { model, Schema, Types } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    posts: [{
        type: Types.ObjectId,
        ref: 'Post'
    }]
});

export const User = model('User', userSchema);