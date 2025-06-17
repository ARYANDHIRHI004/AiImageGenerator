import express from "express"
import { generateImage } from "../controllers/generate.controllers.js"
import { verifyJwt } from "../middlewares/auth.middlewares.js"

const generateRoute = express.Router()

generateRoute.route("/generate-image").post( generateImage)

export default generateRoute