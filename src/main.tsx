import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { debounce } from "debounce"
import { saveState } from "./app/handleStorage"

store.subscribe(
  debounce(() => {
    saveState(store.getState())
  }, 200)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
