import { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './Pages/GalleryPage';
import Home from './Pages/Home';
import {images} from './data'

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  function whichLanguage(elm) {
    setIsEnglish(elm)
  }

  return (
    <Router >
      <div className="App">
        <Nav whichLanguage={whichLanguage} isEnglish={isEnglish} />
        <Routes>
          <Route path='/' element={<Home isEnglish={isEnglish} />}></Route>
          <Route path='/galleryPage' element={<GalleryPage images={images} />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
