const mongoose = require("mongoose")

function connected(){
  mongoose.set("strictQuery", true);
  mongoose.connect(`mongodb://localhost:27017/OAKTECH`)
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