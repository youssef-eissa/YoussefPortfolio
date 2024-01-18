import './Main.css'
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';



function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact/>
    </div>
  )
}

export default App;
