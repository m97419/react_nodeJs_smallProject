require("dotenv").config()
const express = require("express")
const cors = require("cors")

const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")

const PORT = process.env.PORT || 2005
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/photos",require("./routes/photoRoute"))
app.use("/api/posts",require("./routes/postRoute"))
app.use("/api/todos",require("./routes/todoRoute"))
app.use("/api/users",require("./routes/userRoute"))

app.get("/",(req,res)=>{
    res.send("this is the home page")
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    })
})
mongoose.connection.on('error', err => {
    console.log(err)
})