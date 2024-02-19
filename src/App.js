// import logo from './logo.svg';
// import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NoPage/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    </div>
  );
}

export default App;
