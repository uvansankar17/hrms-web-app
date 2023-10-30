import * as Yup from "yup";

export const projectShema = Yup.object().shape({
  projectName: Yup.string().transform((value) => value.trim())
    .min(3, "Project Name should be at least 3 characters")
    .required("Project Name is required"),
  deadLine: Yup.date().transform((value) => value.trim()).required("Deadline is required"),
  totalHours: Yup.string().transform((value) => value.trim()).required("Total Hours is required"),
  remainingHours: Yup.string().transform((value) => value.trim()).required("Remaining Hours is required"),
  date: Yup.date().required("Date is required"),
  hours: Yup.string().transform((value) => value.trim()).required("Hours is required"),
  description: Yup.string().transform((value) => value.trim())
    .min(10, "Description should be at least 10 characters")
    .required("Description is required"),
});
