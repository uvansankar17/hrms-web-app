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
  attachment: Yup.mixed().required("File is required"),
  description: Yup.string().required('Description is required'),
});

