import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";

import "./App.css";
export default function App() {
  return (
    <div className="app">
    <div className="content">
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dashboard/student" element={<Dashboard />} />

        </Routes>
      </Router>
    </div>
    </div>
  );
}
