import asyncHandler from "../utils/asyncHandler.js";


export const registerUser = asyncHandler(async (req, res) => {
    
    const {name, username, email, password, confirmPassword, avatar} = req.body
})

export const loginUser = asyncHandler(async (req, res) => {
    
    const {name, username, email, password, confirmPassword, avatar} = req.body
})

export const logoutUser = asyncHandler(async (req, res) => {
    
    const {name, username, email, password, confirmPassword, avatar} = req.body
})

export const getCurrentUser = asyncHandler(async (req, res) => {
    
    const {name, username, email, password, confirmPassword, avatar} = req.body
})
