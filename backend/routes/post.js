const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const User = require('../models/user');
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post");



router.get('/allpost', (req, res) => {
    Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy","_id name")
    .then((posts) => {
        res.json({posts})
    })
    .catch(err => {
        console.log(err);   
    })
})

router.post('/createpost', requireLogin ,(req, res)=>{
    const {title, body, pic} = req.body;
    if(!title || !body || !pic){
        return res.status(422).json({error : "Please add all the feilds"})
    }
    //console.log(req.user);
    
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy : req.user
    })
    console.log(post);
    
    post.save()
    .then(result => {
        res.json({post : result})
    })
    .catch(err =>{
        console.log(err);  
    })
})

router.get('/mypost',requireLogin, (req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

//like functionality
router.put('/like', requireLogin, (req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push : {likes : req.user._id}
    },{
        //updating old record 
        new : true
    }).exec((err, result) => {
        if(err){
            return res.status(422).json({error:err})
        }else{
            return res.json(result)
        }
    })
})

//unlike functionality
router.put('/unlike', requireLogin, (req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull : {likes:req.user._id}
    },{
        //updating old record 
        new : true
    }).exec((err, result) => {
        if(err){
            return res.status(422).json({error:err})
        }else{
            return res.json(result)
        }
    })
})

//Comments route
router.put('/comment', requireLogin, (req,res)=>{
    const comment = {
        text : req.body.text,
        postedBy : req.user._id
    }

    Post.findByIdAndUpdate(req.body.postId,{
        $push : {comments : comment}
    },{
        //updating old record 
        new : true
    })
    .populate("comments.postedBy","_id name")
    .exec((err, result) => {
        if(err){
            return res.status(422).json({error:err})
        }else{
            return res.json(result)
        }
    })
})

//deleting the post using params
router.delete('/deletepost/:postId',requireLogin,(req,res)=>{
    Post.findOne({_id : req.params.postId})
    .populate("postedBy","_id")
    .exec((err, post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedBy._id.toSting() === req.user._id.toSting()){
            post.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
        }
    })
})


module.exports = router