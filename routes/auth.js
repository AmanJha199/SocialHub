const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys')


router.post('/signup', (req, res) => {
    //console.log(req.body);
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please fill all the feilds" })
    }
    //query in the database
    User.findOne({ email: email })
        .then((savedUser) => {
            //if same email exist then error is shown of already exists
            if (savedUser) {
                return res.status(422).json({ error: "User already signed up" })
            }
            bcrypt.hash(password, 14)
                .then(hashpassword => {
                    //if not created then we will create user ans then save it
                    const user = new User({
                        email,
                        password,
                        name
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "Successfully signed up !" })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Add Email or password" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email or password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        //res.json({ message: "Successfully signed in" })
                        const token = jwt.sign({_id : savedUser._id}, JWT_SECRET)
                        res.json({token : token})
                    }
                    else {
                        res.status(422).json({ error: "Invalid Email or password" })
                    }
                })
                .catch(err => {
                    console.log(err);

                })
        })
})

module.exports = router;