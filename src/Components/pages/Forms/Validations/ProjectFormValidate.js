import * as Yup from 'yup';

export const projectShema = Yup.object().shape({
    projectName:Yup.string().min(3,"Project Name Should be minimum 3 characters..!").required("project Name Must be Required..!"),
    client:Yup.string().min(3,"Client Name Should be minimum 3 characters..!").required("Client Name Must be Required..!"),
    startDate:Yup.date().required("Must enter start date"),
    endDate:Yup.date().required("Must enter end date"),
    rate: Yup.number().min(10000, `Minimum tip is 10,000 of the price.`).required("Rate Must be Required..!"),
    priority:Yup.string().min(4,"Select Any One Priority").required("priority Must be Required..!"),
    teamLeader:Yup.string().min(2,"Add  Atleast one Team Leader").required("Team Leader Required..!"),
    teamMember:Yup.string().min(2,"Add  Atleast one Team Member").required("Team Member Required..!"),
    description:Yup.string().min(10,"Min one line Description For this Project").required("Description Required..!"),
    projectFile:Yup.mixed().required("File is required").test("fileSize", "File size is too large", (value) => {
      if (!value) return true; // If no file is provided, we consider it valid.
      return value.size <= 5242880; // 5 MB (You can adjust this limit as needed)
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true; // If no file is provided, we consider it valid.
      return (
        ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type) // Specify valid MIME types
      );
    }),

})