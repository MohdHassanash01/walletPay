
import mongoose from "mongoose"

export  function ConnectionDb(url: string){
    mongoose.connect(url).then(() => {
        console.log("mongoDB connected successfully");
        
    }).catch((err) => {
        console.log("mongoDb is not connected",err);
        
    })
}

