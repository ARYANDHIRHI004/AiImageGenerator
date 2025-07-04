import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";

export const validator = (req, res, next) => {
    const errors =validationResult(req)

    if(errors.isEmpty()){
        return  next()
    }

    const extractedErrors = []
    errors.array().map((err)=>(extractedErrors.push({
        [err.path]:err.msg
    })))

    throw new ApiError(422, "Recived data is not valid", extractedErrors)
}