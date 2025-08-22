import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import LearningPage from "./pages/LearningPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/learn" element={<LearningPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



/*
const LearningPage: React.FC = () => {
    return (
        <div>
            <h1>Learning Page</h1>
            <p>Welcome to the Learning Page!</p>
        </div>
    );
};

export default LearningPage;
*/