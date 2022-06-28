// Dependencies
import React, { useState, Fragment } from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

// Middlewares

// Components
import EmailForm from '../partials/EmailForm';

// Styles
const heroStyles = [
  {
    titleColor: 'text-orange-400',
    subTitleColor: 'text-orange-400',
  },
  {
    titleColor: 'text-blue-500',
    subTitleColor: 'text-blue-500',
  },
  {
    titleColor: 'text-lime-600',
    subTitleColor: 'text-lime-600',
  },
  {
    titleColor: 'text-blue-500',
    subTitleColor: 'text-blue-400',
  },
  {
    titleColor: 'text-amber-500',
    subTitleColor: 'text-amber-500',
  },
];

// Media
import HeroImg1 from '../images/cover/img_010_w1600px.png';
import HeroImg2 from '../images/cover/img_011_w1600px.png';
import HeroImg3 from '../images/cover/img_012_w1600px.png';
import HeroImg4 from '../images/cover/img_013_w1600px.png';
import HeroImg5 from '../images/cover/img_014_w1600px.png';
// Logos
import Logo01 from '../images/icons/duty-aimanager_white.png';
import Logo02 from '../images/icons/iconos_white.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const HeroImgArray = [
    HeroImg1,
    HeroImg2,
    HeroImg3,
    HeroImg4,
    HeroImg5,
  ];

  const randomIndex = Math.floor(Math.random() * HeroImgArray.length);
  const selectedPicture = HeroImgArray[randomIndex];

  return (
    <Fragment>
      <main>
        {/* Cover */}
        <div
          className="pt-32 sm:pt-40 relative bg-right bg-cover pb-60 lg:pb-10"
          style={{
            backgroundImage: `url(${selectedPicture})`,
          }}
        >
          <div className="mx-auto max-w-6xl lg:px-8 px-4 sm:px-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-left lg:px-0 lg:text-left lg:flex lg:items-left">
                <div className="lg:py-24">
                  <a
                    href="https://blog.aimanager.online"
                    className="inline-flex items-left text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-orange-500 rounded-full">
                      Blog
                    </span>
                    <span className="ml-4 text-sm">
                      Se parte de nuestra comunidad
                    </span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>

                  {/* Title */}
                  <h1
                    className={`mt-4 text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold sm:mt-5 lg:mt-6 text-left ${heroStyles[randomIndex].titleColor}`}
                  >
                    Gestioná tus
                  </h1>
                  <div className="pb-12 w-full">
                    <div className="slidingHorizontal text-3xl sm:text-4xl md:text-5xl text-left font-bold">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400 ">
                        franquicias
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                        tiendas o locales
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                        centros comerciales
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                        equipos de trabajo
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                        fabricas o industrias
                      </span>
                    </div>
                  </div>
                  <p
                    className={`mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl ${heroStyles[randomIndex].subTitleColor}`}
                  >
                    Evolucionamos tu gestión operativa digitalizando tus
                    procesos y compañia.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    {/* <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0"> */}
                    <EmailForm />
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Logos */}
        <div className=" bg-orange-500 p-4 sm:p-0 md:p-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-0 md:gap-8 px-8 justify-items-center">
              <img
                className="place-self-center sm:scale-50 md:scale-75"
                src={Logo01}
                alt=""
              />
              <img
                className="place-self-center sm:scale-50 md:scale-75"
                src={Logo02}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </Fragment>
  );
}

export default HeroHome;
