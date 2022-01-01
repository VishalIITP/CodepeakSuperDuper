const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    post: {   // ca, student or mentor
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    college_name: {
        type: String,
        required: true
    },
    college_id: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    github_url: {
        type: String,
        required: false
    },
    gitlab_url: {
        type: String,
        required: false
    },
    refferal_code: {
        type: String,
        required: false
    },
    other_profile_url: {
        type: String,
        required: false
    },
    projects_url: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});
const User = mongoose.model('User', UserSchema);

module.exports = User;