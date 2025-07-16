// find user with firstname and lastName

// import { Request, Response } from "express";
// import { userModel } from "../../models/user.model";

// export async function findUser(req:Request,res:Response){

//    const filter = (req.query.filter as string) || "";
// try {
    
//         const users = await userModel.find({
//         $or:[{
//             firstName : {
//                 "$regex": filter,
//                 $options: 'i'
//             }
//         },{
//             lastName : {
//                 "$regex": filter,
//                 "$options": "i"
//             } 
//         }]
//     })

//    if (users.length === 0) {

//    res.status(404).json({ message: "No users found." });

//    return

// }else{

//            res.json({
//         user: users.map(user => ({
//             email: user.email,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             _id: user._id
//         }))
//     })

//     }

// } catch (error: any) {
    
//            console.error(error);  // Log the error for debugging

//        res.status(500).send({
//         message:`Internal server error `,
//         error: error.message,
//         success: false
//        })

// }

// }


// find user with firstname and lastName and as well as phone_no


import { Request, Response } from "express";
import { userModel } from "../../models/user.model";

export async function findUser(req: Request, res: Response) {
  const filter = (req.query.filter as string) || "";

  try {
    const users = await userModel.aggregate([
      {
        $lookup: {
          from: "wallets", 
          localField: "_id",
          foreignField: "userId",
          as: "wallet"
        }
      },
      {
        $unwind: {
          path: "$wallet",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $match: {
          $or: [
            { firstName: { $regex: filter, $options: "i" } },
            { lastName: { $regex: filter, $options: "i" } },
            { "wallet.phone_No": { $regex: filter, $options: "i" } }
          ]
        }
      },
      {
        $project: {
          _id: 1,
          email: 1,
          firstName: 1,
          lastName: 1,
          phone: "$wallet.phone_No"
        }
      }
    ]);

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({
      message: "Users fetched successfully",
      users
    });

  } catch (error: any) {
    console.error("Find user error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
}
