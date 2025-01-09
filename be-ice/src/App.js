import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Cards from './Components/Cards/Cards';
import Slide from './Components/Slide/Slide';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Cards />
      <Banner />
      <Slide />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
