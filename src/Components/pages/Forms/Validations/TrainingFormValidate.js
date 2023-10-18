import * as Yup from 'yup';

export const TrainingShema = Yup.object().shape({
    trainingType : Yup.string().required("Training Type is Required"),
        trainer : Yup.string().required("Trainer is Required"),
        employee : Yup.string().required("Employees is Required"),
        description : Yup.string().min(10, 'Description should be at least 10 characters').required('Description is required'),
        trainingCost : Yup.number().min(1000, `Minimum tip is 1,000 of the price.`).required("Training Cost is Required..!"),
        startDate : Yup.date().required("Start date is Required"),
        endDate : Yup.date().required("End date is Required"),
        status : Yup.string().required("Status is Required")
})