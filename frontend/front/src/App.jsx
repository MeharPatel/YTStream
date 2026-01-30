// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
}