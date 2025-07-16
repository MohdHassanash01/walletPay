

import { Response , Request} from "express";
import { transactionModel } from "../../models/transactions.model";


export async function transaction (req: Request, res: Response){
    try{
        //@ts-ignore
      const userId = req.userId 

    if(!userId){
      res.status(400).json({
        message: "User is missing"
      })
      return;
    }

    const data = await transactionModel.find({
        userId
    })
    .populate({ path: "to", select: "email firstName lastName" })
  .populate({ path: "from", select: "email firstName lastName" })
    .sort({createdAt: -1})

   if (data) {
     res.status(200).json({
      message: "Fetched data successfully",
      data: data
    })
    return;
   }else{

res.status(400).json({
      message: "Transaction does't exist",
    })

   }
    }

    catch(e){
      console.log(e);
      res.status(400).json({
        message: "Internal Server Error"
      })
    }
}

