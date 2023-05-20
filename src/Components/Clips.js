import React from "react";
import style from "../assets/css/clips.module.scss";

function Clips({ scrollValue }) {
  const clip = new Array(15).fill(" ");

  return (
    <div className={style.scroll}>
      <div
        style={{ transform: `translateX(${scrollValue}px)` }}
        className={style.clipWrapper}
      >
        {clip.map((item, i) => (
          <div key={i} className={style.clip}>
            Clips
          </div>
        ))}
      </div>
    </div>
  );
}
export default Clips;
