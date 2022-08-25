const express = require('express')
const router = express.Router()
const User = require('../models/AuthModel')


router.post('/signup', (req, res) => {
    if (!req.body.name || !req.body.password || !req.body.email) {
        res.status(403)
        res.send("required field missing");
        return;
    }

    else {
        //checking if user exists or not
        User.findOne({ email: req.body.email }, (err, user) => {
            if (user) {
                res.send("user already exist");
            }

            else{
                User.create(req.body).then(function (user) {
                    res.send(user)
                })
            }
        })
    }    
});


module.exports = router

