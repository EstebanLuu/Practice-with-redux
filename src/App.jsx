import { Provider } from "react-redux";
import "./App.css";
import { store } from "./Redux";
import { Contador, Cart } from "./components";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>HOLA</h1>
        <Contador />
      </div>

      <Cart />
    </Provider>
  );
}

export default App;
