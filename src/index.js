import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import About from "./about";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavbarProvider from "./components/NavbarProvider";
import TextTab from "./tabs/text";
import ChoicesTab from "./tabs/choices";
import TodoTab from "./tabs/todo";
import ProfileTab from "./tabs/profile";
import ColorsTab from "./tabs/colors";
import LowerRight from "./tabs/lowerright";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <NavbarProvider>
          <Routes>
          <Route path="/" element={<TextTab />} />
            <Route path="/text" element={<TextTab />} />
            <Route path="/choices" element={<ChoicesTab />} />
            <Route path="/todo" element={<TodoTab />} />
            <Route path="/profile" element={<ProfileTab />} />
            <Route path="/colors" element={<ColorsTab />} />
            <Route path="/lower-right" element={<LowerRight />} />
          </Routes>
        </NavbarProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
