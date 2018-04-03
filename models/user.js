var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    displayName: String,
    avatar: {
        publicId: String,
        url: String,
        thumbnail: String,
    },
    email: String,
    isAdmin:{
        type: Boolean,
        default: false
    },
    isActive:{
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose, {
    usernameLowerCase: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;