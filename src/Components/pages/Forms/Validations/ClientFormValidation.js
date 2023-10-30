import * as Yup from "yup";

export const clientSchema = Yup.object().shape({
    name:Yup.string().transform((value) => value.trim()).required("Name Must be Required..!"),
    date:Yup.date().required("Must enter date"),
    address: Yup.string().transform((value) => value.trim()).required("Address Must be Required..!"),
    email:Yup.string().transform((value) => value.trim()).email().required("Email is required"),
    project:Yup.string().transform((value) => value.trim()).required(" Enter project Name is be Required..!"),
    mobileno:Yup.number().transform((value) => value.trim()).required("Mobile Number is Required..!"),
    companyname:Yup.string().transform((value) => value.trim()).required("Company name Must be Required..!"),
});
