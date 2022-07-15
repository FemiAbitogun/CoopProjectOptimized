const mongoose= require('mongoose');

// ok, i created a dotenv folder or an enviroment variable to
// store my database connection string. A best programming practice....
mongoose.connect(process.env.MONGODB_URI,(err)=>{
if(err){
    console.log(err.message)

}// i think we are done. we then go to the server file to import
// this file
else{
    console.log("connection to database is successful.....")
}
})