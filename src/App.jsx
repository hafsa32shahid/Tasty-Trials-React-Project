import Navbar from './components/Navbar.jsx'; // Correct path to Navbar.jsx
import Hero from './components/Hero.jsx'
import Featcards from './components/Feat-cards.jsx';
import Services from './components/Services.jsx';
import CategoriesPro from './components/CategoriesPro.jsx';
import ToRatedPro from './components/TopRatedPro.jsx';
import Cheifs_profile from './components/Cheifs_profile.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';
function App() {

  return (
    <>
     <Navbar />
      <Hero/>
      <Featcards/>
      <Services/>
      <CategoriesPro/>
      <ToRatedPro/>
      <Cheifs_profile/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
