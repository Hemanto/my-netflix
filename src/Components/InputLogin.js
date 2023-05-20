import React from "react";
import style from "../assets/css/InputLogin.module.scss";
function InputLogin() {
  return (
    <div className={style.wrapper}>
      <input placeholder="Email Address" />
      <button>Get Started &#8811;</button>
    </div>
  );
}

export default InputLogin;
