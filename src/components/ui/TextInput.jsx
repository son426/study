import React from "react";

const TextInput = (props) => {
  const { backgroundColor, height, value, onChange } = props;

  return <textarea height={height} value={value} onChange={onChange} />;
};

export default TextInput;
