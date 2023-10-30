import * as Yup from "yup";

export const ticketSchema = Yup.object().shape({
  project: Yup.string().transform((value) => value.trim()).required("Project is required"),
  ticketId: Yup.string().transform((value) => value.trim()).required("Ticket ID is required"),
  assignTo: Yup.string().transform((value) => value.trim()).required("Assignee is required"),
  ticketFollower: Yup.string().transform((value) => value.trim()).required("Ticket Follower is required"),
  priority: Yup.string().transform((value) => value.trim()).required("Priority is required"),
  status: Yup.string().transform((value) => value.trim()).required("Status is required"),
  client: Yup.string().transform((value) => value.trim()).required("Client is required"),
  createDate: Yup.date().required("Creation date is required"),
  attachment: Yup.mixed().transform((value) => value.trim()).required("File is required"),
  description: Yup.string().transform((value) => value.trim()).required("Description is required"),
});
