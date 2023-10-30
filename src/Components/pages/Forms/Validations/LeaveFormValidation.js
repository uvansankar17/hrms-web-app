import * as Yup from "yup";

export const leaveSchema = Yup.object().shape({
    name:Yup.string().required(" Name Must be Required..!"),
    message:Yup.string().required("  Please enter some message..!"),
    role:Yup.string().required(" Enter your role Name is be Required..!"),
    startdate:Yup.date().required("Must enter startdate"),
    enddate: Yup.required(" Must enter enddate..!"),
    reason:Yup.string().required("Reason Must be Required..!"),
});
