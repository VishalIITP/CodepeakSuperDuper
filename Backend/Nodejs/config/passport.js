const User = require("../models/user");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    // email and password auth
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
            const user = await User.findOne({ email });
            if (!user) {
                return done(null, false, 'Wrong username or password');
            }
            try {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    return done(null, user, 'Logged in successfully');
                }
                else {
                    return done(null, false, 'Wrong password');
                }
            } catch (err) {
                return done(null, false, 'Something is wrong');
            }
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
            cb(err, user);
        });
    });
};