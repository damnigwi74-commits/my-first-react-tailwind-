import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import LearningPage from "./pages/LearningPage";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearningPage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/problems" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
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