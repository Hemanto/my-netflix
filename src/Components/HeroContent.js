import React from "react";
import style from "../assets/css/Hero.module.scss";
import InputLogin from "./InputLogin";

function HeroContent() {
  return (
    <>
      <div className={style.wrapper}>
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <InputLogin />
    </>
  );
}

export default HeroContent;
