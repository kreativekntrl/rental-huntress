import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";

import About from "./pages/About.js";
import Landing from "./pages/Landing";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
