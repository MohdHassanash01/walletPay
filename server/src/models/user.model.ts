
import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
         trim: true,
        required: true
    },
        firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
},{
    timestamps:true
})


export const userModel  = mongoose.model("user",userSchema)
