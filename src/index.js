import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./redux/reduver";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModifierClient from "./components/ModifierClinet";
const store = legacy_createStore(reducer);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Modifier/:id" element={<ModifierClient />} />
        {/* <Route path="/Ajouter" element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);
