require("dotenv").config()
const express = require("express")
const cors = require("cors")
const router = require("./router")


const PORT = process.env.PORT || 5000;


const app = express();


app.use(express.json())
app.use(cors())
app.use("/",router)


app.listen(PORT,() => {
    console.log(`listening on http://localhost:${PORT}`) 
})