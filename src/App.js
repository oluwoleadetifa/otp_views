import Home from "./components/app/Home/Home";
import React from "react";
import { Route, Routes} from "react-router-dom";
import Register from "./components/app/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
