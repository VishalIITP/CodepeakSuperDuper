const User = require("../models/user");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require('passport-github2').Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

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
    //  google auth
    passport.use(
        new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        }, function (accessToken, refreshToken, profile, done) {
            process.nextTick(async function () {
                try {
                    let user = await User.findOne({ email: profile.emails[0].value });
                    if (user) {
                        return done(null, user, 'Logged in successfully');
                    } else {
                        return done(null, false, 'Invalid credentials');
                    }
                } catch (err) {
                    return done(null, false, 'Something is wrong');
                }
            });
        })
    )
    // github auth
    passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    }, function (accessToken, refreshToken, profile, done) {
        process.nextTick(async function () {
            try {
                let user = await User.findOne({ github_url: profile.id });
                if (user) {
                    return done(null, user, 'Logged in successfully');
                } else {
                    return done(null, false, 'Invalid credentials');
                }
            } catch (err) {
                return done(null, false, 'Something is wrong');
            }
        });
    }
    ));

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
            cb(err, user);
        });
    });
};