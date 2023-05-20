import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

function Sidemenu() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default Sidemenu;
