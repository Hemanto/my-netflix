import React from "react";
import { useSelector } from "react-redux";

function Sidemenu() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return <div>Sidemenu</div>;
}

export default Sidemenu;
