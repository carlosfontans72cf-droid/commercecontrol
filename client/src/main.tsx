import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login"; // placeholder
import Register from "./pages/Register"; // placeholder
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Ruta principal después de loguearse - placeholder */}
        <Route path="/app" element={<h1>Panel principal – pendiente de implementar</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);