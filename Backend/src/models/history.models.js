import mongoose, { Schema } from "mongoose";

const historyScheme = new mongoose.Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    generatedImages:{
        type:{
            url:String,
            localpath:String
        }
    }

},{
    timestamps:true
})

export const History = mongoose.model("History", historyScheme)