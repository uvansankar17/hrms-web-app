import * as Yup from "yup";

export const projectShema = Yup.object().shape({
  projectName: Yup.string().transform((value) => value.trim())
    .min(3, "Project Name Should be minimum 3 characters..!")
    .required("project Name Must be Required..!"),
  client: Yup.string().transform((value) => value.trim())
    .min(3, "Client Name Should be minimum 3 characters..!")
    .required("Client Name Must be Required..!"),
  startDate: Yup.date().required("Must enter start date"),
  endDate: Yup.date().required("Must enter end date"),
  rate: Yup.number().transform((value) => value.trim())
    .min(10000, `Minimum tip is 10,000 of the price.`)
    .required("Rate Must be Required..!"),
  priority: Yup.string().transform((value) => value.trim())
    .min(4, "Select Any One Priority")
    .required("priority Must be Required..!"),
  teamLeader: Yup.string().transform((value) => value.trim())
    .min(2, "Add  Atleast one Team Leader")
    .required("Team Leader Required..!"),
  teamMember: Yup.string().transform((value) => value.trim())
    .min(2, "Add  Atleast one Team Member")
    .required("Team Member Required..!"),
  description: Yup.string().transform((value) => value.trim())
    .min(10, "Min one line Description For this Project")
    .required("Description Required..!"),
  projectFile: Yup.mixed().transform((value) => value.trim()).required("File is required"),
});
