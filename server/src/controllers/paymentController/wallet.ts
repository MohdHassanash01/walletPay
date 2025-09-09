import { Response,Request } from "express"
import { walletModel } from "../../models/account.model";
import { success } from "zod";



const wallet = async (req: Request, res: Response) => {
   try{
    //@ts-ignore
     const userId = req.userId ;
    const {phoneNo,amount} = req.body;

    console.log(userId,phoneNo,amount);
    

    if(!userId || !phoneNo || !amount){
      res.status(400).json({
        message: "data is missing"
      })
      return;
    }

    const user = await walletModel.findOne({
     userId:userId
    })

    // console.log(user);
    

    if(user){
      res.status(404).json({
        success:false,
        message: "User already has a wallet"
      })
      return;
    }
    
   const wallet = await walletModel.create({
        userId,
        balance: amount,
        phone_No:phoneNo
    })

    if (wallet) {

         res.status(200).json({
          success: true,
      message: "Wallet created succesfully",
      wallet
    })
    return
    }
 

 

   }catch(error:any){
 
       console.error(error);  // Log the error for debugging

      res.status(500).send({
        error:`Internal server error `,
        message: error.message,
        success: false
       })

   }
}


export default wallet;