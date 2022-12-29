const mongoose = require("mongoose")

function connected(){
  mongoose.set("strictQuery", true);
  mongoose.connect(`${process.env.URL_DATABASE}`)
  .then(() =>{
    console.log("Database connected")
  })
  .catch((error) => {
    console.log(`Failed connection with database ${error}`)
  })
  
}


module.exports = {
  connected
}