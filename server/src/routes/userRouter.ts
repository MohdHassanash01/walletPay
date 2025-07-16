
import { Router } from "express";
import { signup } from "../controllers/authController/signup";
import { signin } from "../controllers/authController/signin";
import { authMiddleware } from "../middlewares/user.middleware";
import { userModel } from "../models/user.model";
import { walletModel } from "../models/account.model";

export const userRouter = Router()


userRouter.post("/signup",signup)
userRouter.post("/signin",signin)

userRouter.get("/detail",authMiddleware, async function(req,res){

    //@ts-ignore
    const userId = req.userId 

  try {
    
      const user = await userModel.findById(userId)

      const userWallet = await walletModel.findOne({userId})

      if (user) {
        res.json({
            email: user.email,
            firstName: user.firstName,
            lastName:user.lastName,
            Phone_no: userWallet?.phone_No,
            balance: userWallet?.balance
        })

        return
      }
  } catch (error: any) {

         console.error(error);  // Log the error for debugging

       res.status(500).send({
        message:`Internal server error `,
        error: error.message,
        success: false
       }) 
    
  }

    

})

