const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category = new Schema({
    title: { 
        type : String,
        required: true
    },
    color : { 
        type : String,
        required: true
    } 
},
{ timestamps: true });

module.exports = mongoose.model('Category',Category);