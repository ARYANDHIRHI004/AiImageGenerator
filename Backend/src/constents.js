import dotenv from "dotenv"

dotenv.config()

export const ORIGIN = process.env.ORIGIN
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
