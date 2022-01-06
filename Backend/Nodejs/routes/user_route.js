const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Login to continue" });
        }
        const user = req.user;
        const { password, ...info } = user._doc;
        res.status(201).json({ user: info });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
})

router.get('/logout', (req, res) => {
    try {
        req.logOut();
        res.status(200).json({ msg: "You are logged out" });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
})

module.exports = router;