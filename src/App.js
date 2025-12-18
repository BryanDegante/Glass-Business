import { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './Pages/GalleryPage';
import Home from './Pages/Home';

import { images } from './data'
import { FaPhoneAlt } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase'
import { CustomWiggle } from 'gsap/CustomWiggle'

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  function whichLanguage(elm) {
    setIsEnglish(elm)
  }
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
  gsap.registerPlugin(CustomEase, CustomWiggle);
  var wiggle = 10;
  CustomWiggle.create("Wiggle.easeInOut", { wiggles: wiggle, type: "easeInOut" });
  useGSAP(() => {
    timeline.set('.phone__icon', { scale: 0, })
    timeline.to('.phone__icon', {
      scale: 1,
    })
    timeline.to('.phone__icon', {
      scale: 1,
      duration: 2,
      rotation: 30,
      ease: "Wiggle.easeInOut",
    })


  }, [])

  return (
    <Router >
      <div className="App">
        <Nav whichLanguage={whichLanguage} isEnglish={isEnglish} />
        {isEnglish ? (
          
        <a href="tel:+17139929303">

          <button className='call__button'>
            <FaPhoneAlt className='phone__icon' />
          </button>
        </a>):
       ( <a href="tel:+17132593755">

          <button className='call__button'>
            <FaPhoneAlt className='phone__icon' />
          </button>
        </a>)

      }
        <Routes>
          <Route path='/' exact element={<Home isEnglish={isEnglish} />}></Route>
          <Route path='/GalleryPage'exact element={<GalleryPage images={images} isEnglish={isEnglish} />}></Route>
        </Routes>
        <Footer isEnglish={isEnglish} />
      </div>
    </Router>
  );
}

export default App;
