import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Header from "./components/Header";
import Error from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/freelances" element={<Freelances />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
