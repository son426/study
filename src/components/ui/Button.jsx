import React from "react";
import styles from "../../css/Button.module.css";

const Button = (props) => {
  const { title, onClick } = props;

  return <button onClick={onClick}>{title}</button>;
};

export default Button;
