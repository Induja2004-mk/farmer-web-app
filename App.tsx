import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/login";
import { Dashboard } from "./components/dashboard";
import { DiseaseDetection } from "./components/DiseaseDetection";
import { SensorMonitoring } from "./components/SensorMonitoring";
import { Ecommerce } from "./components/Ecommerce";

const App: React.FC = () => {
  const user = localStorage.getItem("user"); // Check if user is logged in

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="p-4 bg-blue-500 text-white flex justify-between">
        <h1 className="text-lg font-bold">Farm Management System</h1>

        {/* Button to Open Blynk */}
        <a
          href="/blynk.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Open Blynk Dashboard
        </a>
      </nav>

      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/disease-detection" element={user ? <DiseaseDetection /> : <Navigate to="/login" />} />
        <Route path="/sensors" element={user ? <SensorMonitoring /> : <Navigate to="/login" />} />
        <Route path="/ecommerce" element={user ? <Ecommerce /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
