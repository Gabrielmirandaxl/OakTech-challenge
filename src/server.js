require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

const database = require("./database/connection")
const routers = require("./routes/router")

database.connected()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use("/", routers)

const port = 8080

app.listen(port, () =>{
  console.log(`Server listening on port ${port}`)
})