import React from "react";
import Sidemenu from "../Components/Sidemenu";
import ClipSection from "./ClipSection";
import VideoSection from "./VideoSection";
import style from "../assets/css/container.module.scss";
function MainContainer() {
  return (
    <div className={style.wrapper}>
  <div>
    <Sidemenu/>
  </div>
      <div>
        <ClipSection />
        <VideoSection />
      </div>
    </div>
  );
}

export default MainContainer;
