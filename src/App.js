import "./App.scss";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn.js";
import Blog from "./pages/Blog.js";

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
