import React, { useState } from "react";
import Sections from "./Sections";
import style from "../assets/css/Accordion.module.scss";
function Accordion() {
  const [isVisable, setIsVisable] = useState(false);
  const [isVisablesection, setIsVisablesection] = useState("");
  //const { user } = useContext(UserContext);
  //console.log(user.name);
  return (
    <div className={style.wrapper}>
      {/* <header className={style}> */}
      <Sections
        title={"About"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisable={isVisablesection === "About"}
        setIsVisablesection={setIsVisablesection}
      />
      <Sections
        title={"Contact Details"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisable={isVisablesection === "Contact Details"}
        setIsVisablesection={setIsVisablesection}
      />
      <Sections
        title={"Location"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisable={isVisablesection === "Location"}
        setIsVisablesection={setIsVisablesection}
      />
      {/* </header> */}
    </div>
  );
}

export default Accordion;
