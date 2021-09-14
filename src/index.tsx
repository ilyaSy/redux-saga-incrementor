import { render } from "react-dom";
import { configureStore } from "./store";
import App from "./App";
import { Provider } from "react-redux";

const store = configureStore();

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
