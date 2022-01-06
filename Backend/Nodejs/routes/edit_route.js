const express = require('express');
const router = express.Router();
const userMiddleware = require('../controllers/userMiddleware');

router.patch('/:id', userMiddleware, async (req, res) => {
    try {
        if (req.body.name) {
            res.user.name = req.body.name;
        }
        if (req.body.phone) {
            res.user.phone = req.body.phone;
        }
        if (req.body.email) {
            res.user.email = req.body.email;
        }
        if (req.body.college_name) {
            res.user.college_name = req.body.college_name;
        }
        if (req.body.github_url) {
            res.user.github_url = req.body.github_url;
        }
        if (req.body.projects_url) {
            res.user.projects_url = req.body.projects_url;
        }
        try {
            const updatedUser = await res.user.save();
            res.json(updatedUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
})

module.exports = router;