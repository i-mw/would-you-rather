import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { createStore } from "redux"
import {Provider} from "react-redux"

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
