
/*model*/
const Mongoose = require('mongoose');


const monthlyRegistrationSchema = new Mongoose.Schema({


    referalCode: {
        type: String,
    },

    customerImagePath: {
        type: String,
    },







    state: {
        type: String,
    },
    branch: {
        type: String,
    },
    unitCode: {
        type: String,
    },

    formNo: {
        type: String,
    },


    

    /*personal information */
    fullName: {
        type: String,
    },

    residentialAddress: {
        type: String,
    },

    email: {
        type: String,

    },
    phone: {
        type: String,
    },
    occupation: {
        type: String,
    },

    maritalStatus: {
        type: String,
    },

    religion: {
        type: String,
    },

    gender: {
        type: String,
    },

    birthday: {
        type: String,
    },


    permanentHomeAddress: {
        type: String,
    },

    stateOfOrigin: {
        type: String,
    },

    LGA: {
        type: String,
    },

    homeTown: {
        type: String,
    },

    // section b.................

    prefferDaysOfMeeting: {
        type: String,

    },

    contributionPlan: {
        type: String,
    },


    /* bank details */
    bankName: {
        type: String,
    },

    accountNumber: {
        type: String,
    },

    BVN: {
        type: String,
    },


    meansOfIdentification: {
        type: String,
    },

    idCardNo: {
        type: String,
    },



    //SECTION D  /* SPOUSE or  next of kin infotmation*/

    kinFullname: {
        type: String,
    },

    kinAddress: {
        type: String,
    },

    kinEmail: {
        type: String,
    },

    kinPhone: {
        type: String,
    },

    kinOccupation: {
        type: String,
    },

    kinOfficeAddress: {
        type: String,
    },

    kinRelationshipType: {
        type: String,
    },

    kinYearOfrelationship: {
        type: String,
    },


    //SECTION  C       /* refree details */

    referee1ImagePath: {
        type: String
    },
    referee1FullName: {
        type: String
    },

    referee1HomeAddress: {
        type: String,
    },

    referee1WorkAddress: {
        type: String,
    },
    referee1Business: {
        type: String,
    },
    referee1Email: {
        type: String,

    },
    referee1Phone: {
        type: String,
    },

    referee1Religion: {
        type: String,
    },

    referee1Relationship: {
        type: String,
    },




    // refree 2...........
    referee2ImagePath: {
        type: String
    },
    referee2FullName: {
        type: String
    },

    referee2HomeAddress: {
        type: String,
    },

    referee2WorkAddress: {
        type: String,
    },
    referee2Business: {
        type: String,
    },
    referee2Email: {
        type: String,

    },
    referee2Phone: {
        type: String,
    },

    referee2Religion: {
        type: String,
    },

    referee2Relationship: {
        type: String,
    },






})

module.exports = Mongoose.model("monthlyRegistration", monthlyRegistrationSchema);