

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'Please Enter first name'
    },
    lastname: String,
    username:{
        type: String,
        unique: true,
        required: 'Please Enter User name' 
    },
    gender: String,
    country: String,
    city: String,
    password: {
        type: String,
        required: 'Please Enter password'
    },
  });

  module.exports = mongoose.model('Registration', registrationSchema);
