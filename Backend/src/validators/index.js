import { body } from "express-validator"


export const userRegistrationValidation = () => {
  return [
    body("name")
        .notEmpty().withMessage("Name is required"),
    
    body("username")
        .trim()
        .notEmpty().withMessage("Username is required"),

    body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Email is not valid"),
    
    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({min:6}).withMessage("Atleast 6 characters is required"),

    body("confirmPassword")
        .notEmpty().withMessage("Confirm Password is required")

  ]
}

export const userLoginValidation = () => {
  return [
    body("username")
        .trim()
        .notEmpty().withMessage("Username is required"),

    body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Email is not valid"),
    
    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({min:6}).withMessage("Atleast 6 characters is required"),

  ]
}
