const express = require('express');
const router = express.Router();


router.get("",(req,res)=>{
    const locals= {
        name : "Web Blog Application",
        description : "a web blog with nodejs express mongodb ejs"
    }

    res.render('index', {locals})
})

router.get("/about",(req,res)=>{
    res.render('about')
})

module.exports= router;