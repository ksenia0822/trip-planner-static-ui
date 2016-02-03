var express = require('express');
var router = express.Router(); 
var models = require('../models'); 
var Hotel = models.Hotel; 
var Restaurant = models.Restaurant; 
var Activity = models.Activity; 
var Bluebird = require('bluebird'); 


router.get('/', function(req, res, next){

  Bluebird.all([
    Hotel.find({}), 
    Restaurant.find({}), 
    Activity.find({})
  ])
  .spread(function(hotels, restaurants, activities){
    res.render('index', {
      all_hotels: hotels, 
      all_restaurants: restaurants, 
      all_activities: activities
    })

    console.log(all_hotels)
  })
  .catch(next)
  .then(null, next)
})

module.exports = router; 








