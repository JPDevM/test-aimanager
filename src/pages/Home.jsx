// Dependencies
import React from 'react';

// Middlewares
import ReactGA from 'react-ga';

// Components
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
import Blog from '../partials/Blog1';
import Newsletter from '../partials/Newsletter';

// Styles

// Media

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        {/* <Testimonials /> */}
        <Blog />
        <Newsletter />
      </main>
    </div>
  );
};

export default Home;
