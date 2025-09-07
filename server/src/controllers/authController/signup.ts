
import { Request, Response } from "express";
import {z} from "zod"
import { userModel } from "../../models/user.model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

    const signupShema = z.object({

     email:z.string()
    .nonempty({ message: "Email is required" })
        .min(6, { message: "Email must be at least 6 characters long" })
        .max(320, { message: "Email must be less than 320 characters" })
        .email({ message: "Please enter a valid email address" }),

         firstName: z.string().nonempty({message: "firstName is required"})
        .min(2, { message: "firstName must be at least 2 characters long" })
        .max(50,{ message: "firstName must be at least 20 characters long" }),

        lastName: z.string().nonempty({message: "lastName is required"})
        .min(2, { message: "lastName must be at least 2 characters long" })
        .max(50,{ message: "lastName must be at least 20 characters long" }),


        password: z.string()
             .nonempty({ message: "Password is required" })
        .min(5, { message: "Password must be at least 5 characters long"})
        .max(20, { message: "Password must be less than 20 characters" }) 
        .refine(
            (value) => /[A-Z]/.test(value), 
            { message: "Password must contain at least one uppercase letter" }
          )
          .refine(
            (value) => /[a-z]/.test(value), 
            { message: "Password must contain at least one lowercase letter" }
          )
          .refine((value) => /[0-9]/.test(value), {
            message: "Password must contain at least one number"
        })

    })

export async  function signup(req:Request,res:Response){



        const result = signupShema.safeParse(req.body)

         if (!result.success) {
          res.status(411).send({
            error:"Incorrect Format", 
            message:result.error.issues[0].message
        })

        return
    }

    const {email, firstName, lastName, password} = result.data

    try {

        const existUser = await userModel.findOne({
            email
        })

        if (existUser) {
            
            res.status(403).send({
                 message:"user is already exists in our database",
                success: false
            })

            return
        }
      
        const hashPassword = await bcrypt.hash(password,10) 

        const user  = await userModel.create({
            email,
            firstName,
            lastName,
            password: hashPassword
        })

        // 2. Generate JWT token
  const token = jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET_USER as string, {
    expiresIn: "7d"
  });

           if (user) {
             res.status(200).send({
                message:"Signed up successfully...",
                token,
                success: true
            })

            return
        }else{

         res.status(500).send({
         message: "Failed to create user",
         success: false
});

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