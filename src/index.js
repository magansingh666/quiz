import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AllQuizes from "./components/AllQuizes";
import PlayQuiz from "./components/PlayQuiz";
import QuizResult from "./components/QuizResult";
import NewQuiz from "./components/NewQuiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="all" element={<AllQuizes />} />
        <Route path="new" element={<NewQuiz />} /> 
        <Route path="play" element={<PlayQuiz />} /> 
        <Route path="score" element={<QuizResult />} />        
           
      </Route>      
    </Routes>
  </BrowserRouter>
);
