const User = require('../models/user');

async function init(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user === null) {
            return res.status(404).json({ message: "Cannot find subsciber" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.user = user;
    next();
}

module.exports = init;