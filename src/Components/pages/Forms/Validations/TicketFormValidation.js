import * as Yup from 'yup';

export const ticketSchema = Yup.object().shape({
  project: Yup.string().required('Project is required'),
  ticketId: Yup.string().required('Ticket ID is required'),
  assignTo: Yup.string().required('Assignee is required'),
  ticketFollower: Yup.string().required('Ticket Follower is required'),
  priority: Yup.string().required('Priority is required'),
  status: Yup.string().required('Status is required'),
  client: Yup.string().required('Client is required'),
  createDate: Yup.date().required('Creation date is required'),
  attachment: Yup.mixed().required("File is required").test("fileSize", "File size is too large", (value) => {
    if (!value) return true; // If no file is provided, we consider it valid.
    return value.size <= 100000000000000; // 5 MB (You can adjust this limit as needed)
  })
  .test("fileType", "Invalid file type", (value) => {
    if (!value) return true; // If no file is provided, we consider it valid.
    return (
      ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type) // Specify valid MIME types
    );
  }),
  description: Yup.string().required('Description is required'),
});

