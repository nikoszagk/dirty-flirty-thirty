import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import RSVPForm from './components/RSVPForm';
import GlobalStyle from './styles/GlobalStyle';
import DetailsSection from './components/DetailsSection';
import Confetti from './components/Confetti';

function App() {
  useEffect(() => {
    document.title = "Dirty Flirty 30s"; // Set your desired title here
  }, []);
  return (
    <>
      <Confetti />
      <GlobalStyle />
      <HeroSection />
      <DetailsSection />
      <RSVPForm />
    </>
  );
}

export default App;
