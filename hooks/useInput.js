import React, { useState } from "react";

const useInput = (initialState) => {
  const [input, setInput] = useState(initialState);
  const ChangeInput = (text) => {
    setInput(text);
  };
  const ResetInput = () => {
    setInput(initialState);
  };
  return { input, ChangeInput, ResetInput };
};

export default useInput;
