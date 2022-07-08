import "./App.scss";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="favorites" element={<Favorites />}/>
    </Routes>
  );
}

export default App;
