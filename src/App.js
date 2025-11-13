import {  useState } from 'react';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Services from './components/Services';
import Features from './components/Features';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  function whichLanguage(elm) {
    setIsEnglish(elm)
  }
    
  return (
    <div className="App">
      <Nav whichLanguage={whichLanguage} isEnglish={isEnglish} />
      <Landing isEnglish={isEnglish} />
      <Features isEnglish={isEnglish}/>
      <Services isEnglish={isEnglish} />
      <Gallery />
      <Footer/>

    </div>
  );
}

export default App;
