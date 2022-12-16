import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Contador from "./components/Contador";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>HOLA</h1>
        <Contador />
      </div>
    </Provider>
  );
}

export default App;
