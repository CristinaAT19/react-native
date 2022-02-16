import React, { useState } from "react";

const useValidate = (initialState) => {
  const [validate, setValidate] = useState(initialState);
  const Validar = (edad) => {
    setValidate(JSON.parse(edad) >= 18);
  };
  const reset = () => {
    setValidate(initialState);
  };
  return { validate, Validar, reset };
};

export default useValidate;
