import mongoose from "mongoose";

const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        min: {
            type: Number,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export const Blog = mongoose.model("Blog", BlogSchema);
