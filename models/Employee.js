var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Employee = new Schema({
  name: {
    type: String
  },
  role: {
    type: String
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);