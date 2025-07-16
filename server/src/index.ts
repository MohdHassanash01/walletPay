import dotenv from "dotenv"

dotenv.config()

import express from "express"
import cors from "cors"


import { ConnectionDb } from "./config"
import { userRouter } from "./routes/userRouter"
import { paymentRouter } from "./routes/paymentRouter"

const allowedOrigins = [
  "http://localhost:5173",
  "https://walletpay-frontend1.onrender.com"
];



const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL as string
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use("/api/v1",userRouter)
app.use("/api/v1",paymentRouter)


app.listen(PORT, function(){
    console.log(`server is runing on ${PORT}`);
    ConnectionDb(MONGODB_URL)
})


