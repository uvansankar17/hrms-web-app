import * as Yup from "yup";

export const EmployeeShema = Yup.object().shape({
  firstName: Yup.string().transform((value) => value.trim()).required("First name is required"),
  lastName: Yup.string().transform((value) => value.trim()).required("Last name is required"),
  userName: Yup.string().transform((value) => value.trim()).required("Username is required"),
  email: Yup.string().transform((value) => value.trim())
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().transform((value) => value.trim()).required("Password is required"),
  confirmPassword: Yup.string().transform((value) => value.trim())
    .oneOf([Yup.ref("password"), null], "Password Does n't Match")
    .required("Password confirmation is required"),
  employeeId: Yup.string().transform((value) => value.trim()).required("Employee ID is required"),
  joiningDate: Yup.date().required("Joining date is required"),
  mobile: Yup.string().transform((value) => value.trim())
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  company: Yup.string().transform((value) => value.trim()).required("Company name is required"),
  department: Yup.string().transform((value) => value.trim()).required("Department is required"),
  designation: Yup.string().transform((value) => value.trim()).required("Designation is required"),
});
