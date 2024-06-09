import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Tech, About,Projectworks,} from "./components";
import { StarsCanvas } from './components/canvas';
const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-0'>
          <StarsCanvas/>
            <Hero scrollContainer={wrapperRef} />
            
          </div>
           <div id="about" className='relative z-30 bg-primary mt-[-2px]'>
            <About />
          </div>
          <div id="projectworks" className='relative z-30 bg-primary'>
            <Projectworks />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
            <Experience />
          </div>
          
          <div className='relative z-30 bg-primary'>
            <Tech />
          </div>
          <div className='relative z-0'>
          <Contact />
       <StarsCanvas/>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
