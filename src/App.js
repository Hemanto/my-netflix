import { Provider } from "react-redux";
import "./App.css";
import Head from "./Components/Head";
import MainContainer from "./Layouts/MainContainer";
//import Todo from "./Layouts/Todo";
import store from "./Utility/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
