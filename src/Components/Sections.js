import React from "react";
import style from "../assets/css/Sections.module.scss";
function Sections({ title, description, isVisable, setIsVisablesection }) {
  const hideHandler = () => {
    if (isVisable) {
      setIsVisablesection(" ");
    } else {
      setIsVisablesection(title);
    }
  };
  return (
    <>
      <div className={style.wrapper}>
        <div onClick={hideHandler} className={style.header}>
          <h1>{title}</h1>
          {isVisable ? (
            <span className={style.rotate}>&#8889;</span>
          ) : (
            <span>&#8889;</span>
          )}
        </div>
        {isVisable ? (
          <div className={style.content}>
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Sections;
