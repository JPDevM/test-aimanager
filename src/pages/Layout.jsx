// Dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

// Middlewares
import ReactGA from "react-ga";


// Components
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
import Blog from '../partials/Blog1';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

// Styles

// Media

const Layout = () => {
  return (
    <div className="overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <Outlet />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Layout;
