const express = require('express')
const router = express()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Story = require('../models/Story')
const Comment = require('../models/Comment')

//@desc Comment
//@route post /comments/add

router.post("/add", ensureAuth, async(req, res)=>{
    try {
        req.body.user = req.user.id
        await Comment.create(req.body)
        res.redirect('/stories')
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }
})


module.exports = router