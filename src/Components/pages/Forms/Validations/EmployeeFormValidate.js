import * as Yup from "yup";

export const EmployeeShema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  userName: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Does n't Match")
    .required("Password confirmation is required"),
  employeeId: Yup.string().required("Employee ID is required"),
  joiningDate: Yup.date().required("Joining date is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  company: Yup.string().required("Company name is required"),
  department: Yup.string().required("Department is required"),
  designation: Yup.string().required("Designation is required"),
});
