const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the promotions to you");
})
.post((req,res,next)=>{
    res.end("Will add the promotion with name: " + req.body.name + " and description: "+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 404;
    res.end("Put operation not supported");
})
.delete((req,res,next)=>{
    res.end("Will delete all the promotions");
});

promoRouter.route('/:promoID')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end("Will send promotion with id: " +req.params.promoID+" to you");
})
.post((req,res,next)=>{
    res.statusCode = 404;
    res.end("Post operation not supported");
})
.put((req,res,next)=>{
    res.write("Updating the list : "+req.params.promoID +'\n')
    res.end("Will add the promotion with name: " + req.body.name + " and description: "+req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting the promotion: "+req.params.promoID);
});

module.exports = promoRouter;