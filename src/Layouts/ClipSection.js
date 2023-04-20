import React, { useState } from "react";
import Clips from "../Components/Clips";
import style from "../assets/css/clips.module.scss";
function ClipSection() {
  const [scroll, setScroll] = useState(0);
  const moveLeft = () => {
    setScroll(scroll + 50);
  };
  const moveRight = () => {
    setScroll(scroll - 50);
  };
  return (
    <div className={style.sectionClipWrapper}>
      <button onClick={moveLeft}>&#8810;</button>
      <Clips scrollValue={scroll} />
      <button onClick={moveRight}>&#8811;</button>
    </div>
  );
}

export default ClipSection;
