import * as Yup from "yup";

export const PromotionShema = Yup.object().shape({
  promotionFor: Yup.string().transform((value) => value.trim()).required("Promotion For is required"),
  promotionFrom: Yup.string().transform((value) => value.trim()).required("Promotion From is required"),
  promotionTo: Yup.string().transform((value) => value.trim()).required("Promotion To is required"),
  promotionDate: Yup.date().required("Promotion Date is required"),
});
