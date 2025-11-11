import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Landing from './components/Landing';
import Nav from './components/Nav';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  function whichLanguage(elm) {
    setIsEnglish(elm)
  }

  return (
    <div className="App">
      <Nav whichLanguage={whichLanguage} isEnglish={isEnglish} />
      <Landing />
      <Gallery />
      <Footer/>

    </div>
  );
}

export default App;
