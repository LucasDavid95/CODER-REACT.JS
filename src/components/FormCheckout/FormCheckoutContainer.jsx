import React from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormCheckoutContainer = () => {
  const checkoutFn = (data) => {};

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: null,
    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("This field is mandatory.")
        .min(4, "The name must have at least 3 characters."),
      email: Yup.string()
        .email("This field must be an email.")
        .required("This field is mandatory."),
      phone: Yup.number().required("This field is mandatory."),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      <FormCheckout
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        values={values}
      />
    </div>
  );
};

export default FormCheckoutContainer;
