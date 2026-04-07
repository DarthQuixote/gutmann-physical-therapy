import Hero from './components/Hero';
import AthleteGallery from './components/AthleteGallery';
import About from './components/About';
import ContactForm from './components/ContactForm';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero name="DR. ANDREW GUTMANN" />
      <AthleteGallery />
      <About />
      <div id="contact-form">
        <ContactForm />
      </div>
      <StickyCTA />
    </div>
  );
}

export default App;
