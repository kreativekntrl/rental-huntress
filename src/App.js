import "./App.scss";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn.js";
import Blog from "./pages/Blog.js";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
