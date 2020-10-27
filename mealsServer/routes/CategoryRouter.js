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
.post((req,res,next)=>{
    Category.create(req.body).then(categories=>{
        console.log('categories created' + categories);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(categories);
    },err => {next(err)})
    .catch((error)=>{
        console.log(error);
        next(error);});
})
.put((req, res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res,next)=>{
    Category.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err)); 
});

module.exports = categoryRouter;