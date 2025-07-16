import { Response,Request } from "express"
import { walletModel } from "../../models/account.model";



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
     phone_No:phoneNo,
     userId:userId
    })

    // console.log(user);
    

    if(user){
      res.status(404).json({
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
      message: "Wallet created succesfully",
      wallet
    })
    return
    }
 

 

   }catch(e){
    console.log(e);
    res.status(500).json({
      message: "Internal Server Error"
    })
    return;
   }
}


export default wallet;