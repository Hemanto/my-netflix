import React from "react";
import Header from "./Components/Header";
//import { Provider } from "react-redux";
import "./App.css";

//import Todo from "./Layouts/Todo";

import HeroContent from "./Components/HeroContent";

function App() {
  return (
    <div>

      <div className="wrapper">
        <Header />
        <HeroContent />
      </div>

    </div>
  );
}

export default App;
