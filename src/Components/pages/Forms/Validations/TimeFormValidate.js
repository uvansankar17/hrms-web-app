import * as Yup from "yup";

export const projectShema = Yup.object().shape({
  projectName: Yup.string()
    .min(3, "Project Name should be at least 3 characters")
    .required("Project Name is required"),
  deadLine: Yup.date().required("Deadline is required"),
  totalHours: Yup.string().required("Total Hours is required"),
  remainingHours: Yup.string().required("Remaining Hours is required"),
  date: Yup.date().required("Date is required"),
  hours: Yup.string().required("Hours is required"),
  description: Yup.string()
    .min(10, "Description should be at least 10 characters")
    .required("Description is required"),
});
