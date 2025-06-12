import { ACCESS_TOKEN_SECRET } from "../constents.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"

export const verifyJwt = asyncHandler( async (req, _ , next) => {
    const token = req.cookies?.accessToken

    if(!token){
        throw new ApiError(400, "Unauthorized request")
    }

    const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET)
    req.user = decodedToken._id
    next()
}
)