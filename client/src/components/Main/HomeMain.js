import React from 'react';
import HomeMain from './index';
import About from 'routes/Home/Sections/About';
import Contact from 'routes/Home/Sections/Contact';
import Services from 'routes/Home/Sections/Services';
import Footer from 'components/Footer';

function Index() {
  return (
    <HomeMain>
      <About />
      <Contact />
      <Services />
      <Footer />
    </HomeMain>
  );
}

export default Index;
