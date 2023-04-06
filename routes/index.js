const express = require('express')
const router = express()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Story = require('../models/Story')

//@desc Login/Landing page
//@route GET/

router.get("/", ensureGuest, (req, res)=>{
    res.render('login', {
        layout: 'login'
    })
})

//@desc Dashboard
//@route /dashboard

router.get("/dashboard", ensureAuth, async(req, res)=>{
    try {
        const stories = await Story.find({ user: req.user.id }).lean()
        // console.log(req.user);
    res.render('dashboard', {
        name: req.user.displayName,
        stories
    })
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }
   
})

//@desc Login/Profile page
//@route GET /profile

router.get("/profile", ensureAuth, (req, res)=>{
    res.render('profile')
})

router.post('/profile', ensureAuth, async(req, res)=>{
    const count = await Story.count({ user})
    
})


module.exports = router