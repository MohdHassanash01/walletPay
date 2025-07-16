
import {Router} from "express"
import { authMiddleware } from "../middlewares/user.middleware"
import { findUser } from "../controllers/paymentController/findUser"
import { balance } from "../controllers/paymentController/balance"
import { transaction } from "../controllers/paymentController/transaction"
import { transfer } from "../controllers/paymentController/transfer"
import wallet from "../controllers/paymentController/wallet"

export const paymentRouter = Router()

paymentRouter.get("/users",findUser)

paymentRouter.get("/balance",authMiddleware,balance)

paymentRouter.post("/wallet",authMiddleware,wallet)

paymentRouter.post("/transaction",authMiddleware,transaction )

paymentRouter.post("/transfer",authMiddleware,transfer)