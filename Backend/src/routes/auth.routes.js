import express  from "express";
import { getCurrentUser, loginUser, logoutUser, registerUser } from "../controllers/auth.controllers.js";
import { userLoginValidation, userRegistrationValidation } from "../validators/index.js";
import { validator } from "../middlewares/validator.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";

const authRoute = express.Router()

authRoute.route("/register").post(userRegistrationValidation(),validator, registerUser)

authRoute.route("/login").post(userLoginValidation(),validator, loginUser)
authRoute.route("/logout").post(verifyJwt, logoutUser)
authRoute.route("/getMe").post(verifyJwt, getCurrentUser)

export default authRoute