//onepiece29
const express = require("express")
require("dotenv").config()
const port = process.env.PORT || 5000
const mongoose = require("mongoose")
const multer = require("multer")
const fs = require("fs")
const app = express()

const protectAuth = require("./middleware/protectAuth")

app.use(express.json())

const storage = multer.diskStorage({
    destination: (_,__, cb) =>{
        if(!fs.existsSync("uploads")){
            fs.mkdirSync("uploads")
        }

        cb(null, "uploads")
    },
    filename: (_, file, cb) =>{
        cb(null, file.originalname)
    }
})


const upload = multer({storage})
app.post("/poster", protectAuth, upload.single("review-poster"), (req, res) =>{
    return res.status(200).json({
        URL: `api/posters/${req.file.originalname}`
    })
})

app.use("/api/posters", express.static("uploads"))
app.use("/api/user", require("./routes/user.routes"))
app.use("/api/reviews", require("./routes/review.routes"))
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () =>{
            console.log("Server is running")
        })
        console.log(`Database is connected on ${mongoose.connection.host}`)
    })
    .catch((error) =>{
        console.log(error)
    })