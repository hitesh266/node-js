var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    dapartment: {
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);