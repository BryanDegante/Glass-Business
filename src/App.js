import { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './Pages/GalleryPage';
import Home from './Pages/Home';

import {images} from './data'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  function whichLanguage(elm) {
    setIsEnglish(elm)
  }

  return (
    <Router >
      <ScrollToTop />
      <div className="App">
        <Nav whichLanguage={whichLanguage} isEnglish={isEnglish} />
        <Routes>
          <Route path='/' element={<Home isEnglish={isEnglish} />}></Route>
          <Route path='/galleryPage' element={<GalleryPage images={images} isEnglish={isEnglish}/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
