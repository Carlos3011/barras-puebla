import * as Yup from 'yup';

export function initialValues() {
    return {
        name: "",
        address: "",
        description: "",
        location: null,
        images: [],
    };
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required("Este campo es obligatorio"),
        address: Yup.string().required("Este campo es obligatorio"),
        description: Yup.string().required("Este campo es obligatorio"),
        location: Yup.object().required("La localizacion es requerida"),
        images: Yup.array()
            .min(1, 'Se requiere una imagen como minimo')
            .required('La imagen es requerida'),
    });
}