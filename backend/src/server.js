require("dotenv").config()
import express from "express"
import mongoose from "mongoose"
import cors from "cors"


const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.use("/api", require("./routes/tickets"))

app.listen(3333, () => console.log("Servidor rodando 🚀"))
