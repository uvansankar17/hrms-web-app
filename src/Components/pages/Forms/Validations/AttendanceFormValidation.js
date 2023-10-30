import * as Yup from "yup";

export const attendanceSchema = Yup.object().shape({
    name:Yup.string().transform((value) => value.trim()).required(" Name Must be Required..!"),
    team:Yup.string().transform((value) => value.trim()).required(" Team must be Required..!"),
    date:Yup.date().required("Must enter end date"),
    punchin: Yup.string().transform((value) => value.trim()).required("Punch In Time Must be Required..!"),
    punchout:Yup.string().transform((value) => value.trim()).required("Punch Out Time Must be Required..!"),
    production:Yup.string().transform((value) => value.trim()).required("Production Time Must be Required..!"),
    break:Yup.string().transform((value) => value.trim()).required("Break Time Must be Required..!"),
    overtime:Yup.string().transform((value) => value.trim()).required("Over Time Must be Required..!")
});
