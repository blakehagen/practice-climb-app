var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String, required:true, unique: true}
});

module.exports = mongoose.model('User', UserSchema);