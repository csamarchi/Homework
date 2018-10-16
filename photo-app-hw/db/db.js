const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/user';

mongoose.connect(connectionString, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected at ', connectionString);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected at ');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose error');
});
