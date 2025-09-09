
import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'user',
        required: true
    },
    balance: {
        type: Number,
        required: true,
         default: 0,
         min: 0 //
    },
    phone_No:{
        type:String,
        required:true,
        
    }
},{
    timestamps:true
});

export const walletModel = mongoose.model('Wallet', walletSchema)