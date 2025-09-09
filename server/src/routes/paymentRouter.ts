
import {Router} from "express"
import { authMiddleware } from "../middlewares/user.middleware"
import { findUser } from "../controllers/paymentController/findUser"
import { balance } from "../controllers/paymentController/balance"
import { transaction } from "../controllers/paymentController/transaction"
import { transfer } from "../controllers/paymentController/transfer"
import wallet from "../controllers/paymentController/wallet"
import { walletModel } from "../models/account.model"
import { success } from "zod"

export const paymentRouter = Router()

paymentRouter.get("/users",authMiddleware,findUser)

paymentRouter.get("/balance",authMiddleware,balance)

paymentRouter.post("/wallet",authMiddleware,wallet)

paymentRouter.post("/transaction",authMiddleware,transaction )

paymentRouter.post("/transfer",authMiddleware,transfer)

paymentRouter.delete("/wallet/delete",authMiddleware, function(req,res){

    //@ts-ignore
    const userId = req.userId

    try {
        
        const wallet = walletModel.findOneAndDelete({userId})

        if (!wallet) {
            res.status(403).send({
                success: false,
                message: "wallet not found"
            })
        }else{

            res.send(200).send({
                success: true,
                message:"wallet deleted successfull"
            })

        }

    } catch (error:any) {
        
              res.status(500).send({
        error:`Internal server error `,
        message: error.message,
        success: false
       }) 
    


    }

})