
import { Request, Response } from "express";
import {z} from "zod"
import { userModel } from "../../models/user.model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET_USER = process.env.JWT_SECRET_USER

    const signInSchema = z.object({
     email:z.string()
    .nonempty({ message: "Email is required" })
        .min(6, { message: "Email must be at least 6 characters long" })
        .max(320, { message: "Email must be less than 320 characters" })
        .email({ message: "Please enter a valid email address" }),

        password: z.string()
             .nonempty({ message: "Password is required" })
        .min(5, { message: "Password must be at least 5 characters long"})
        .max(20, { message: "Password must be less than 20 characters" }) 
   
         

    })

export async  function signin(req:Request,res:Response){



        const result = signInSchema.safeParse(req.body)

         if (!result.success) {
          res.send({
            message:"Incorrect Format", 
            error:result.error.issues[0].message
        })

        return
    }

    const {email, password} = result.data

    try {

        const user = await userModel.findOne({
            email
        })

        if (!user) {
            
           res.status(400).send({
                message:"User does not exist. Please sign up first."
            })

            return
        }
      
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (passwordMatch) {
          
            const token = jwt.sign({
                id: user._id.toString()
            },JWT_SECRET_USER as string)

             res.status(200).send({
                message:"Successflly signed  in....",
                email: user.email,
                token,
                success:true
            })

        }else{

          res.status(401).send({
                message:"your credentials are incorrect...",
                success: false
            })

            return

        }

        
    } catch (error:any) {
        
           console.error(error);  // Log the error for debugging

       res.status(500).send({
        message:`Internal server error `,
        error: error.message,
        success: false
       }) 

    }

}