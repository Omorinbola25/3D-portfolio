import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedbacks from './components/Feedbacks';
import StarsCanvas from './components/StarsCanvas';
import Works from './components/Works';
import Tech from './components/Tech';
import About from './components/About';


const App = () => {
  return (
 <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
         <Hero/>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        </div>
    </BrowserRouter>
 
  )
}

export default App
