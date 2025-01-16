import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: true,
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export const Contact = mongoose.model("Contact", ContactSchema);
