//jshint esversion:6

const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-Parser');


const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');
const app=express();
app.use('/dishes',dishRouter);
app.use('/leaders',leaderRouter);
app.use('/promotions',promoRouter);
app.use('/:dishID',dishRouter);
app.use('/:leaderID',leaderRouter);
app.use('/:promoID',promoRouter);

app.use(morgan('dev'));
app.use(bodyParser.json());

const hostname = 'localhost';
const port = 8000;


app.use(express.static(__dirname+'/public'));
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});



