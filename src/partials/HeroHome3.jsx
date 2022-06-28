// Dependencies
import React, { useState } from 'react';

// Middlewares

// Components
// import Modal from '../utils/Modal';

// Styles

// Media
import HeroImage from '../images/cover/img_008_width800px.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}{' '}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-gray-600 body-font">
            <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Gestioná tu
                  <div className="slidingHorizontal">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                      franquicia
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                      tienda o local
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                      centro comercial
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                      equipo de trabajo
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                      fabrica o industria
                    </span>
                  </div>
                </h1>

                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Evolucionamos su gestión operativa digitalizando sus procesos y compañia.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="mx-auto"
                  src={HeroImage}
                  width="768"
                  height="432"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
