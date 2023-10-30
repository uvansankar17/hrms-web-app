import * as Yup from "yup";

export const LogAndRegSchema = Yup.object().shape({
  email: Yup.string().transform((value) => value.trim())
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().transform((value) => value.trim()).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Does n't Match")
    .required("Password confirmation is required"),
  otp: Yup.number().transform((value) => value.trim())
    .typeError("OTP must be a number")
    .positive("OTP must be a positive number")
    .integer("OTP must be an integer")
    .required("OTP is required"),
});
