import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import NavbarProvider from "./components/providers/NavbarProvider";
// import TextTab from "./_deprecated/tabs/text";
// import ChoicesTab from "./_deprecated/tabs/choices";
// import TodoTab from "./_deprecated/tabs/todo";
// import ProfileTab from "./_deprecated/tabs/profile";
// import ColorsTab from "./_deprecated/tabs/colors";
// import LowerRight from "./_deprecated/tabs/lowerright";
import AuthProvider from "./components/providers/AuthProvider";
import UnprotectedRoutes from "./components/routes/UnprotectedRoutes";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider
        UnAuthChildren={UnprotectedRoutes}
        AuthChildren={ProtectedRoutes}
        />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
