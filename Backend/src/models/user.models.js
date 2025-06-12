import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { ACCESS_TOKEN_EXPIRY, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET } from "../constents.js";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    username:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    confirmPassword:{
        type: String,
        required:true,
        unique:true,
    },
    avatar:{
        type:{
            url:String,
            localpath:String
        },
        default:{
            url:``,
            localpath:""
        },
        required:[true, "Avatar is required"]
    },
    refreshToken:{
        type:String
    },
    refreshTokenExpiry:{
        type:Date
    },
    // emailVerificationToken:{
    //     type:String
    // },
    // emailVerificationTokenExpiry:{
    //     type:Date
    // },

},{timestamps:true})


userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10),
        next()
    }
})

userSchema.models.comparePassword = async function(password){
    const isPasswordMatched = await bcrypt.compare(password, this.password)
    return isPasswordMatched
}

userSchema.models.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,
        email:this.email
    },
        ACCESS_TOKEN_SECRET
    ,{
        expiresIn:ACCESS_TOKEN_EXPIRY
    })
}

userSchema.models.generateRefreshToken = function(){
    return jwt.sign({
        _id:this._id,
    },
        REFRESH_TOKEN_SECRET
    ,{
        expiresIn:REFRESH_TOKEN_EXPIRY
    })
}

export const User = mongoose.model("User", userSchema)