import { Provider } from "react-redux";
import "./App.css";
import Head from "./Components/Head";
import MainContainer from "./Layouts/MainContainer";
//import Todo from "./Layouts/Todo";
import store from "./Utility/store";
import HeroContent from "./Components/HeroContent";

function App() {
  return (
    <Provider store={store}>
      <div>
        <HeroContent />
      </div>
    </Provider>
  );
}

export default App;
