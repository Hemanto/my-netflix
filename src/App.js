
import React from "react";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import "./App.css";
import Head from "./Components/Head";
import MainContainer from "./Layouts/MainContainer";
//import Todo from "./Layouts/Todo";
import store from "./Utility/store";
import HeroContent from "./Components/HeroContent";


function App() {
  return (
      <div>

        <Header />
        <HeroContent />

      </div>
  );
}

export default App;
