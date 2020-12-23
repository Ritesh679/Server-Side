const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the leaders to you");
})
.post((req,res,next)=>{
    res.end("Will add the leader with name: " + req.body.name + " and description: "+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 404;
    res.end("Put operation not supported");
})
.delete((req,res,next)=>{
    res.end("Will delete all the leaders");
});

leaderRouter.route('/:leaderID')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end("Will send the leader with id "+req.params.leaderID+" to you");
})
.post((req,res,next)=>{
    res.statusCode = 404;
    res.end("Post operation not supported");
})
.put((req,res,next)=>{
    res.write("Updating the list : "+req.params.leaderID +'\n')
    res.end("Will add the leader with name: " + req.body.name + " and description: "+req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting the leader: "+req.params.leaderID);
});

module.exports = leaderRouter;