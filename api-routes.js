// api-routes.js

// Initialize express router
let router = require('express').Router();
let postController = require("./posts/postsController")

router.get('/', (req,res)=>{
    res.json({
        status: "API is working",
        message : 'Welcome to the backend for product hunt'
    });

});

router.route('/rest/:date')
    .get(postController.getPostsByDay)


module.exports = router;