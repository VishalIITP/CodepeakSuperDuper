const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', async (req, res,next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ err: 'All fields required' });
        }
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return res.status(422).send({ error: info });
            }
            if (!user) {
                res.status(401).send({ error: info });
            } else {
                req.logIn(user, (error) => {
                    if (error) {
                        return res.status(422).send({ error: "Some error occured" });
                    }
                    res.status(201).send({ user: user, msg: info });
                })
            }
        })(req, res, next);
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
})

module.exports = router;