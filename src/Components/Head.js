import React from "react";
import style from "../assets/css/head.module.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utility/appSlice";
function Head() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
    console.log("clieck");
  };
  return (
    <>
      <div className={style.header}>
        <div className={style.headerImage}>
          <img
            onClick={() => toggleMenuHandler()}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30Gcy3-zix_Lv2aSksnA2dJXgZb8OV6bfwg&usqp=CAU"
            alt="menu"
            width="50px"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="logo"
            width=""
          />
        </div>
        <div className={style.search}>
          <div className={style.inputBox}>
            <span>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <form>
              <input placeholder="Search" />
            </form>
          </div>
          <button className={style.searchButton}>search</button>
        </div>
        <div>login</div>
      </div>
    </>
  );
}

export default Head;
