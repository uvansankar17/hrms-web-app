import * as Yup from "yup";

export const PromotionShema = Yup.object().shape({
  promotionFor: Yup.string().required("Promotion For is required"),
  promotionFrom: Yup.string().required("Promotion From is required"),
  promotionTo: Yup.string().required("Promotion To is required"),
  promotionDate: Yup.date().required("Promotion Date is required"),
});
