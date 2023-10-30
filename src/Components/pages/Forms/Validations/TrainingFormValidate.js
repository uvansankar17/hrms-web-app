import * as Yup from "yup";

export const TrainingShema = Yup.object().shape({
  trainingType: Yup.string().transform((value) => value.trim()).required("Training Type is Required"),
  trainer: Yup.string().transform((value) => value.trim()).required("Trainer is Required"),
  employee: Yup.string().transform((value) => value.trim()).required("Employees is Required"),
  description: Yup.string().transform((value) => value.trim())
    .min(10, "Description should be at least 10 characters")
    .required("Description is required"),
  trainingCost: Yup.number().transform((value) => value.trim())
    .min(1000, `Minimum tip is 1,000 of the price.`)
    .required("Training Cost is Required..!"),
  startDate: Yup.date().required("Start date is Required"),
  endDate: Yup.date().required("End date is Required"),
  status: Yup.string().transform((value) => value.trim()).required("Status is Required"),
});
