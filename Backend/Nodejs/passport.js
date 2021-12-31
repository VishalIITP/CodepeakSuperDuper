const User = require('./user');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = function (passport) {
    password.use('local',
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            // match user
            User.fineOne({email: email})
        })
    )
}