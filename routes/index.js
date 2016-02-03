var express = require('express');
var router = express.Router(); 
var models = require('../models'); 
var Hotel = models.Hotel; 
var Restaurant = models.Restaurant; 
var Activity = models.Activity; 
var Bluebird = require('bluebird'); 


router.get('/', function(req, res, next){

  //     all_activities: activities
  //     all_hotels: h, 
  //     all_restaurants: r, 
  //   h = hotels; 
  //   r = restaurants;
  //   res.render('index', {
  //   return Activity.find({})
  //   return Restaurant.find({})
  //   })
  // .then(function(activities){
  // .then(function(hotels){
  // .then(function(restaurants){
  // Hotel.find({})
  // var h, r, a; 
  // })
  // })
  // })

  Bluebird.all([
    Hotel.find({}), 
    Restaurant.find({}), 
    Activity.find({})
  ])
  .spread(function(hotels, restaurants, activities){
    res.render('index', {
      all_hotels: h, 
      all_restaurants: r, 
      all_activities: activities
    })
  })
  .catch(next)
  // .then(null, next)
})

module.exports = router; 








