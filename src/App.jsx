import './Main.css'
import About from './components/About';
import Navbar from './components/NavBar';
import Banner from './components/Banner'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience';




function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App;
