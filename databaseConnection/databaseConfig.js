const mongoose = require('mongoose');
const databaseConfig=()=>{
//MONGODB_URI = mongodb://localhost/companyDB
    mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
        if (err)
            return console.log("error connecting to database")
        console.log('connection to database succesful.....')
    });
}
module.exports = { databaseConfig };