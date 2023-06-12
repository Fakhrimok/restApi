const express = require ("express")
const app = express()
const mongoose=require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json())


const port=process.env.PORT
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("database connected")).catch((err)=> console.error(err))

app.use("/api",require("./routes/userRoutes"))



app.listen(port, ()=> console.log("listening on port :",port))