// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
// import Faq from './components/Faq';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Services/>
      {/* <Faq/> */}
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
