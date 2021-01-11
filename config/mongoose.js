const mongoose = require('mongoose');
// You have to set these properties
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
// connect to db
// mongoose.connect('mongodb://localhost/Auth-db', {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connect('mongodb://localhost/Auth-db');
// acquire the conection to check if it is successful or not
const db = mongoose.connection;
// error
db.on('error', console.error.bind(console, 'connection error:'));
// up and running then print the message
db.once('open', function() {
    console.log('Successfully Connected to DataBase');
  });