const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    name : String,
    Designation : String,
});

module.exports = mongoose.model("Employee", employee);
