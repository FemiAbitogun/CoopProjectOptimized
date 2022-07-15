
const mongoose = require('mongoose');


const admissionIntoUnitSchema = new mongoose.Schema({
   
    registrationNumber: {
        type: String,
        required: true
    },

    dateOfAdmission: {
        type: String,
        required: true
    },

    refferalFileNumber: {
        type: String,
        required: true
    },

    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    },

    total: {
        type: String,
        required: true
    },


    loanQualify: {
        type: String,
        required: true
    }


})


module.exports = mongoose.model("admissionIntoUnit", admissionIntoUnitSchema)