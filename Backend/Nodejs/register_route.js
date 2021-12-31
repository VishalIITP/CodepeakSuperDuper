const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');
const passport = require('passport');

router.post('/signup/mentor', (req, res) => {
    const {email, password, password2, firstName, secondName, phone, college_name, github_url, projects_url} = req.body;
    let errors = [];
    if (!email || !firstName || !secondName || !phone || !college_name || !github_url || !projects_url || !password || password2) {
        errors.push({msg: "Please fill the fields marked with *"});
    }
    if(password !== password2) {
        errors.push({msg : "passwords dont match"});
    }
    if(password.length < 6 ) {
        errors.push({msg : 'password atleast 6 characters'})
    }
    if (errors.length > 0) {
        res.send(errors.join("\n"));
    } else {
        User.findOne({email: email}).exec((err, user) => {
            if (user) {
                res.send("Email already registered.");
            } else {
                const newUser = new User({
                    post: "mentor",
                    email: email,
                    password: password,
                    name: firstName + " " + secondName,
                    phone: phone,
                    college_name: college_name,
                    github_url: github_url,
                    projects_url: projects_url
                })
                if (req.body.gitlab_url) {
                    User.gitlab_url = req.body.gitlab_url
                }
                if (req.body.refferal_code) {
                    User.refferal_code = req.body.refferal_code;
                }
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save().then((value) => {
                            console.log(value)
                            res.redirect('/');
                        }).catch(value => console.log(value));
                    })
                })
            }
        })
    }
})

router.post('/signup/student', (req, res) => {
    const {email, password, password2, firstName, secondName, phone, college_name, github_url} = req.body;
    let errors = [];
    if (!email || !firstName || !secondName || !phone || !college_name || !github_url || !password || !password2) {
        errors.push({msg: "Please fill the fields marked with *"});
    }
    if(password !== password2) {
        errors.push({msg : "passwords dont match"});
    }
    if(password.length < 6 ) {
        errors.push({msg : 'password atleast 6 characters'})
    }
    if (errors.length > 0) {
        res.send(errors.join("\n"));
    } else {
        User.findOne({email: email}).exec((err, user) => {
            if (user) {
                res.send("Email already registered.");
            } else {
                const newUser = new User({
                    post: "student",
                    email: email,
                    password: password,
                    name: firstName + " " + secondName,
                    phone: phone,
                    college_name: college_name,
                    github_url: github_url,
                    projects_url: projects_url
                })
                if (req.body.college_id) {
                    User.college_id = req.body.college_id
                }
                if (req.body.gitlab_url) {
                    User.gitlab_url = req.body.gitlab_url
                }
                if (req.body.refferal_code) {
                    User.refferal_code = req.body.refferal_code;
                }
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save().then((value) => {
                            console.log(value)
                            res.redirect('/');
                        }).catch(value => console.log(value));
                    })
                })
            }
        })
    }
})

router.post('/signup/ca', (req, res) => {
    const {email, password, password2, name, phone, college_name, college_id} = req.body;
    let errors = [];
    if (!email || !name || !phone || !college_name || !college_id || !password || !password2) {
        errors.push({msg: "Please fill the fields marked with *"});
    }
    if(password !== password2) {
        errors.push({msg : "passwords dont match"});
    }
    if(password.length < 6 ) {
        errors.push({msg : 'password atleast 6 characters'})
    }
    if (errors.length > 0) {
        res.send(errors.join("\n"));
    } else {
        User.findOne({email: email}).exec((err, user) => {
            if (user) {
                res.send("Email already registered.");
            } else {
                const newUser = new User({
                    post: "ca",
                    email: email,
                    password: password,
                    name: firstName + " " + secondName,
                    phone: phone,
                    college_name: college_name,
                    github_url: github_url,
                    projects_url: projects_url
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save().then((value) => {
                            console.log(value)
                            res.redirect('/');
                        }).catch(value => console.log(value));
                    })
                })
            }
        })
    }
})

module.exports  = router;