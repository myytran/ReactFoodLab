//model for recipe

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define collection and schema 

let Recipe = new Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    ingredients: {
        type: String
    },
    notes: {
        type: String
    },
    date: {
        type: Date
    }
},{ 
    collection: 'recipes'
});

module.exports = mongoose.model('Recipe', Recipe);