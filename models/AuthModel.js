const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Field Required']
    },
    email: {
        type: String,
        required: [true, 'Email Field Required']
    },
    password: {
        type: String,
        required: [true, 'Password Field Required']
    },
    created:
    {
        type: Date,
        default: Date.now
    }
})


//making schema to register the user
const User = mongoose.model("NewUser", UserSchema);
module.exports = User;
