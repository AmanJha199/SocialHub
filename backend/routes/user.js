const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post");

//fetching user and its post
router.get('/user/:id', (req,res)=>{
    User.findOne({_id : req.params.id})
    //it will not include password
    .select("-password")
    .populate("postedBy", "_id name")
    .then(user=>{
        Post.find({postedBy : req.param.id})
        .exec((err, posts)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            res.json({user, posts})
        })
    }).catch(err=>{
        return res.status(422).json({error:"User not found"})
    })
})




module.exports = router