import dotenv from "dotenv"

dotenv.config()

import express from "express"
import cors from "cors"

import { ConnectionDb } from "./config"
import { userRouter } from "./routes/userRouter"
import { paymentRouter } from "./routes/paymentRouter"

const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL as string
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use("/api/v1",userRouter)
app.use("/api/v1",paymentRouter)


app.listen(PORT, function(){
    console.log(`server is runing on ${PORT}`);
    ConnectionDb(MONGODB_URL)
})


