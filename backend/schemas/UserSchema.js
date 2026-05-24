const {Schema} = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    password: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

UserSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {UserSchema};