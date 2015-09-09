var mongoose = require('mongoose');


// 1 - a connection string
var connectionString = 'mongodb://localhost/paintWithMe'
// 2 - need make connection

mongoose.connect(connectionString);

// 3 - listen for events and log changes
mongoose.connection.on('connected', function(){
  console.log('mongoose has connected to: ' + connectionString);
});

mongoose.connection.on('disconnected', function(){
  console.log('mongoose has disconnected to: ' + connectionString);
});

mongoose.connection.on('error', function(){
  console.log('mongoose has connected to: ' + error);
});
