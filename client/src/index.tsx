import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { AppContextProvider } from "./components/context/authContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </AppContextProvider>
);

reportWebVitals();
