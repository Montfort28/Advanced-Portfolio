// Home.tsx
import React from 'react';
import HeroNew from '../components/HeroNew';
import AboutNew from '../components/AboutNew';
import ProjectsNew from '../components/ProjectsNew';
import Technologies from '../components/Technologies';
import ContactNew from '../components/ContactNew';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <HeroNew />
      <AboutNew />
      <Technologies />
      <ProjectsNew />
      <ContactNew />
    </div>
  );
};

export default Home;