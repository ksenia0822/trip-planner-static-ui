var mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/tripplanner');

mongoose.connection.on('error', console.error.bind(console, 'connection error!'))


module.exports = {
  Hotel: require('./hotel'), 
  Activity: require('./activity'), 
  Restaurant: require('./restaurant'), 
  Place: require('./place')
}
