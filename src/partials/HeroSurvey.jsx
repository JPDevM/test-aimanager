// Dependencies
import React, { useState, Fragment } from 'react';

// Middlewares

// Components
// import Modal from '../utils/Modal';

// Styles

// Media
import HeroImage from '../images/Survey/survey01.png';
import HeroImage2 from '../images/Survey/survey02.png';

const HeroSurvey = () => {
  return (
    <Fragment>
      {/* Illustration behind hero content */}
      {/* Hero card */}
      <div
        className="flex flex-row h-screen relative bg-cover bg-left"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="h-scren w-1/5 md:w-2/5"></div>
        <div className="h-scren w-4/5 md:w-3/5 flex flex-col justify-center">
          <div className="bg-gradient-to-r from-orange-500 p-2 py-6 sm:p-4 md:p-8 lg:p-12 xl-p-16 text-xl md:text-2xl lg:text-5xl flex flex-col justify-center shadow-md">
            <h1 className="text-white drop-shadow-md shadow-black">
              ¿Quiere saber como se sintió su cliente?
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="h-scren w-1/2 md:w-2/3 ">
              <p className="p-0 sm:p-4 md:p-8 lg:p-12 xl-p-16 text-sm md:text-xl lg:text-3xl text-white font-semibold drop-shadow-md shadow-black">
                Preguntelé a su cliente que quiere saber, en forma directa y
                cuando se encuentre en el local
              </p>
            </div>
            <div className="h-scren w-1/2 md:w-1/3 -mt-4 sm:-mt-10 md:-mt-22 ld:-mt-28">
              <img src={HeroImage2} alt="mobile scan" className="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSurvey;
