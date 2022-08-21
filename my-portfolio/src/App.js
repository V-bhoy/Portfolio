
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Nav from "./Components/Navbar/Nav";
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
         <Nav />
         <Header />
         <div className='dummy' style={{height:"10rem"}} id="about"></div>
         <About />
         <div className='dummy' style={{height:"10rem"}} id="skills"></div>
         <Skills />
         <div className='dummy' style={{height:"10rem"}} id="projects"></div>
         <Project />
         <div className='dummy' style={{height:"10rem"}} id="contact"></div>
         <Contact />
         <Footer />
    </div>
  );
}

export default App;
