// Dependencies
import React, { Fragment } from 'react';

// Middlewares
import ReactGA from 'react-ga';

// Components
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import HeroSurvey from '../partials/HeroSurvey';
import HeroVideo from '../partials/HeroVideo';
import FeaturesSurvey from '../partials/FeaturesSurvey';
import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';

// Styles

// Media

const Survey = () => {
  return (
    <Fragment>
      <Header />
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page sections */}
          <HeroSurvey />
          <HeroVideo />
          <FeaturesSurvey />
          <Newsletter />
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Survey;
