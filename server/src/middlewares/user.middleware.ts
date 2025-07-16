import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken"

export function authMiddleware(req:Request,res:Response,next: NextFunction){

    const token = req.headers.token as string

    // console.log(token);
    
    if (!token) {
        res.status(401).send({
            message:"token is  required"
        })

        return
    }

      if (!process.env.JWT_SECRET_USER) {
    return res.status(500).json({
      message: "JWT secret is not configured"
    });
  }

        try {
            const decodedInformation = jwt.verify(token,process.env.JWT_SECRET_USER as string)

            // @ts-ignore
            req.userId = decodedInformation.id 
    
            next()
        } catch (error: any) {
    
            res.status(401).send({
                message:"Invalid or expired token",
                error: error.message
            })
        }

}