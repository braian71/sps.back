const { Schema, model } = require("mongoose");

const userSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        deleted: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    { timestamps: true }
);

module.exports = model("User", userSchema, "User");
