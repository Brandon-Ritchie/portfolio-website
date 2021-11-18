import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "../Home/Home";
import { Nav } from "../Nav/Nav";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Projects } from "../Projects/Projects";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
