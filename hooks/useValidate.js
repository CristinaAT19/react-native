import React, { useState } from "react";

const useValidate = (initialState) => {
  const [validate, setValidate] = useState(initialState);
  const Validar = (edad) => {
    setValidate(JSON.parse(edad) >= 18);
  };
  return { validate, Validar };
};

export default useValidate;
