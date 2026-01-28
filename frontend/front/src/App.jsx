// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
    </div>
  );
}