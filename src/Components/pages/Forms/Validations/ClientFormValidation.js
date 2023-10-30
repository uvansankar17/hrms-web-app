import * as Yup from "yup";

export const clientSchema = Yup.object().shape({
    name:Yup.string().required("Name Must be Required..!"),
    date:Yup.date().required("Must enter date"),
    address: Yup.string().required("Address Must be Required..!"),
    email:Yup.string().email().required("Email is required"),
    project:Yup.string().required(" Enter project Name is be Required..!"),
    mobileno:Yup.number().required("Mobile Number is Required..!"),
    companyname:Yup.string().required("Company name Must be Required..!"),
});
