import express from "express"
import { deleteHistory, getAllHistory, getHistoryById } from "../controllers/history.controllers.js"
import { verifyJwt } from "../middlewares/auth.middlewares.js"

const userhistoryRoute = express.Router()

userhistoryRoute.route("/getAllHistory").get(verifyJwt, getAllHistory)
userhistoryRoute.route("/get-history-by-id/:historyId").get(verifyJwt, getHistoryById)
userhistoryRoute.route("/delete-history").get(verifyJwt, deleteHistory)

export default userhistoryRoute

