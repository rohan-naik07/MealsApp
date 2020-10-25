const mongoose = require('mongoose');
const Category = require('../models/category');
const express = require('express');
const bodyParser = require('body-parser');
const categoryRouter = express.Router();


categoryRouter.use(bodyParser.json());

categoryRouter.route('/')
.get((req, res,next)=>{
    Category.find(req.query).then(categories=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(categories);
    },err => {next(err)})
    .catch((error)=>{
        console.log(error);
        next(error);});
})
.post((req, res,next)=>{

})
.put((req, res,next)=>{
    
})
.delete((req, res,next)=>{
    
});

module.exports = categoryRouter;