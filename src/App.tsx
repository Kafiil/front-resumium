import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyLayout from "./components/layout/MyLayout";

const App = () => (
  <BrowserRouter>
    <MyLayout></MyLayout>
  </BrowserRouter>
);

export default App;
