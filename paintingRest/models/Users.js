var mongoose = require('mongoose');

// create a blueprint for object
var UserSchema = new mongoose.Schema({
  username: 'string',
  email: 'string',
  password: 'string'
})


// export our model

module.exports = mongoose.model('users', UserSchema);
