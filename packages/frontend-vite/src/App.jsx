import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import ViewPage from "./pages/ViewPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/view" element={<ViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
