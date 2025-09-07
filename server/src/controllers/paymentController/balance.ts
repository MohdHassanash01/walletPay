
import { Request, Response } from "express";
import { walletModel } from "../../models/account.model";


export async function balance (req:Request,res:Response){

    try {
        
        //@ts-ignore
        const userId = req.userId 
// console.log(userId);

      const user = await walletModel.findOne({
        userId
      }
      )

      if(!user){

        res.status(404).send({
            message: "Wallet not found. Please create your wallet to send/receive money."
        })

        return
       
      }else{

        res.status(200).json({
          success: true,
        balance: user.balance
      })
      return;

      }

    } catch (error:any) {
        
        console.error(error);  // Log the error for debugging

       res.status(500).send({
        error:`Internal server error `,
        message: error.message,
        success: false
       }) 

    }

}