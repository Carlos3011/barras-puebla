import * as Yup from "yup";

export function initialValues() {
  return {
    title: "",
    comment: "",
    rating: 3,
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required("Este campo es obligatorio"),
    comment: Yup.string().required("Este campo es obligatorio"),
    rating: Yup.number().required("Este campo es obligatorio"),
  });
}
