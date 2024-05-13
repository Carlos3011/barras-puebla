import * as Yup  from "yup";

export function initialValues(){
    return {
        email: "",
        password: "",
        repeatPassword: "",
    };
}

export function validationSchema(){
    return Yup.object().shape({
        email: Yup.string()
            .required("Este campo es obligator")
            .email("El email no es valido"),
        password: Yup.string().required("Este campo es obligator"),
        repeatPassword: Yup.string()
            .required("Este campo es obligator")
            .oneOf([Yup.ref("password")], "Las contraseñas tiene que ser iguales"),
    });
}