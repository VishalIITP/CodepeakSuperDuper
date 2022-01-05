const express = require('express');
const router = express.Router();
const passport = require('passport');

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
    try {
        if (req.user) {
            return res.status(200).json({ user: req.user, msg: "success" });
        }
        res.status(404).json({ error: "No user" });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
})

router.get("/login/failed", (req, res) => {
    try {
        res.status(401).json({ success: false, msg: "failed" });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
})

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/auth/login/failed"
}))
module.exports = router;