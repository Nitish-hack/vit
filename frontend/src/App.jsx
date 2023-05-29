import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Dashboard from "./pages/Dashboard";
import SignPage from "./pages/SignPage";

import "./App.css";
export default function App() {
  return (
    <div className="app">
    <div className="content">
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/dashboard/student" element={<Dashboard />} />

        </Routes>
      </Router>
    </div>
    </div>
  );
}
