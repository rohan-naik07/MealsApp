const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    categoryIds : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    }],
    title: { 
        type : String,
        required: true
     },
     affordability : { 
        type : String,
        required: true
     },
     complexity : { 
        type : String,
        required: true
     },
     imageUrl : { 
        type : String,
        required: true
     },
     duration: { 
        type : Number,
        required: true
     },
     ingredients : [{type : String}],
     steps : [{type : String}],
     isGlutenFree : { 
        type : Boolean,
        required: true
     },
     isVegan : { 
        type : Boolean,
        required: true
     },
     isVegetarian : { 
        type : Boolean,
        required: true
     },
     isLactoseFree : { 
        type : Boolean,
        required: true
     }
},{timestamps:true});
module.exports = mongoose.model('Meal',MealSchema);
/**
 * new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  )
  id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
 * 
 */