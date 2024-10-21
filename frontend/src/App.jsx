import "./App.css";
import Navbar from "./components/Navbar";
import Landing_page from "./components/Landing_page";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

//Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <div className="font-bold text-center">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Landing_page />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Services />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
