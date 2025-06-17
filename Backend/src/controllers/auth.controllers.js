import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

const generateAccessAndRefreshTokens = async (user) => {
    // const user = await User.findById(userId);
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken;
    await user.save();
    return { accessToken, refreshToken };

}

export const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password, confirmPassword, avatar } = req.body;

    if (password !== confirmPassword) {
        throw new ApiError(400, "Passwords do not match");
    }

    const existingUser = await User.findOne({
        $or: [{ email }, { username }],
    })

    if(existingUser){
        throw new ApiError(400, "User already exists with this email or username");
    }

    const user = await User.create({
        name,
        username,
        email,
        password,
        confirmPassword,
        avatar
    });

    if(!user){
        throw new ApiError(500, "User registration failed");    
    }

    return res.status(200).json(
        new ApiResponse(201, "User registered successfully", user)
    )

});

export const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    
    
    const user = await User.findOne({
        $or: [{ email }, { username }],
    })
    
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid credentials"); 
    }
    
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user);
    console.log(accessToken);

    return res.status(200)
        .cookie("refreshToken", refreshToken, {
            httpOnly: true,
        })
        .cookie("accessToken", accessToken, {
            httpOnly: true,
        })
        .json(
            new ApiResponse(201,  "User logged in successfully",user)
        );
});

export const logoutUser = asyncHandler(async (req, res) => {

    const userId = req.user._id;

    const user = await User.findById(userId);

    if(!user) {
        throw new ApiError(404, "User not found");
    }

    user.refreshToken = null;
    user.refreshTokenExpiry = null;
    await user.save();

    return res.status(200)
    .clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
    .clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
    .json(new ApiResponse(200, "User logged out successfully" ));

});

export const getCurrentUser = asyncHandler(async (req, res) => {

    const userId = req.user;

    const user = await User.findById(userId).select("-password -refreshToken -refreshTokenExpiry");

    if(!user) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(
        new ApiResponse(201, "Current user fetched successfully", user)
    );

});
