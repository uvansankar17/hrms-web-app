import * as Yup from "yup";

export const LogAndRegSchema = Yup.object().shape({
  email: Yup.string().transform((value) => value.trim())
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Invalid email format'
  )
  .required('Email is required'),
  password: Yup.string().transform((value) => value.trim())
  .required('Password is required')
  .min(8, 'Password should be at least 8 characters')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    'Password Contain must at least ([A-Z],[a-b],[@$!%*?&],[0-10])'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Does n't Match")
    .required("Password confirmation is required"),
  otp: Yup.number()
    .typeError("OTP must be a number")
    .positive("OTP must be a positive number")
    .integer("OTP must be an integer")
    .required("OTP is required"),
});
