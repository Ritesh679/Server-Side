const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the dishes to you");
})
.post((req,res,next)=>{
    res.end("Will add the dish "+req.body.name+" with details "+req.body.description );
})
.put((req,res,next)=>{
    res.statusCode = 404;
    res.end("PUT operation not supported.");
})
.delete((req,res,next)=>{
    res.end("Deleting all dishes");
});


dishRouter.route('/:dishID')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    next();
})
.get((req,res,next)=>{
    res.end("Will send the dish "+ req.params.dishID+" to you");
})
.post((req,res,next)=>{
    res.statusCode = 404;
    res.end("Post operation not supported" );
})
.put((req,res,next)=>{
    res.write("Updating the list : "+req.params.dishID +'\n')
    res.end("Will update the dish with name : "+ req.body.name + " and description :"+ req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting the dish"+req.params.dishID);
});
module.exports = dishRouter;