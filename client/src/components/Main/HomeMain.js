import React, { useState } from 'react';
import HomeMain from './index';
import About from 'routes/Home/Sections/About';
import Contact from 'routes/Home/Sections/Contact';
import Services from 'routes/Home/Sections/Services';

function Index() {
  return (
    <HomeMain>
      <About />
      <Contact />
      <Services />
    </HomeMain>
  );
}

export default Index;
