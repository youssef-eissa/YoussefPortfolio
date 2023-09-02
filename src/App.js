import './Main.css'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import AboutAndSkills from './Components/AboutAndSkills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div style={{ fontFamily: 'Bebas Neue' }} className="container-fluid overflow-hidden p-0 theBody">
      <NavBar  />
      <Home />
      <AboutAndSkills/>
      <Projects  />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
