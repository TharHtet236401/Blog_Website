const express = require('express');
const router = express.Router();
const Post = require("../models/Post");


// router.get("", async (req,res)=>{
//     const locals= {
//         name : "Web Blog Application",
//         description : "a web blog with nodejs express mongodb ejs"
//     }

//     try {
//         const data = await Post.find();
//         res.render('index', {locals,data})
//         // res.send(data);
//     } catch (error) {
//         console.log("error");
//     }

    
// })

router.get('', async (req, res) => {
    try {
      const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
      }
  
      let perPage = 5;
      let page = req.query.page || 1;
  
      const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();
  
      // Count is deprecated - please use countDocuments
      // const count = await Post.count();
      const count = await Post.countDocuments({});
      const nextPage = parseInt(page) + 1;
      const hasNextPage = nextPage <= Math.ceil(count / perPage);
  
      res.render('index', { 
        locals,
        data,
        current: page,
        nextPage: hasNextPage ? nextPage : null,
        currentRoute: '/'
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });
  







router.get("/about",(req,res)=>{
    res.render('about')
})

module.exports= router;