import React from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';

import About from './sections/About';

function App() {
  return (
    <>
      <CustomCursor />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
