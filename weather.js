const mongoose = require('mongoose');



//Define a new schema for weather data
const weatherSchema = new mongoose.Schema({

    city: {type: String, required: true},
    temperature: {type: Number, required: true},
    humidity: {type: Number, required: true}

});



module.exports = mongoose.model('Weather', weatherSchema);