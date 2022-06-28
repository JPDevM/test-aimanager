// Dependencies
import React, { Fragment } from 'react';
import Carousel from 'nuka-carousel';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';

// Media
import AxentLogo from '../images/Survey/Axent-Logo.png';
import DutyLogo from '../images/Survey/Duty-Logo.png';
import EOILogo from '../images/Survey/EOI-Logo.png';
import JuntadeAndaluciaLogo from '../images/Survey/JuntadeAndalucia-Logo.png';
import KlarwayLogo from '../images/Survey/Klarway-Logo.png';
import MissTipsiLogo from '../images/Survey/MissTipsi-Logo.png';
import PowerBILogo from '../images/Survey/PowerBI-Logo.png';
import SCGLogo from '../images/Survey/SCG-Logo.jpg';
import SmartDecisionLabLogo from '../images/Survey/SmartDecisionLab-Logo.jpg';
import TdeusLogo from '../images/Survey/Tdeus-Logo.png';
import UMALogo from '../images/Survey/UMA-Logo.png';
import UniversidaddeMalagaLogo from '../images/Survey/UniversidaddeMalaga-Logo.jpg';

const CarouselLogo = (prop) => {
  const { slides } = prop;

  var LogoImg = new Array();
  LogoImg = [
    AxentLogo,
    DutyLogo,
    EOILogo,
    JuntadeAndaluciaLogo,
    KlarwayLogo,
    MissTipsiLogo,
    UMALogo,
    PowerBILogo,
    SCGLogo,
    SmartDecisionLabLogo,
    TdeusLogo,
    UniversidaddeMalagaLogo,
  ];

  return (
    <Fragment>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className="-ml-12 flex text-gray-400 hover:text-white"
          >
            <ChevronDoubleLeftIcon className="w-8" />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className="-mr-12 flex text-gray-400 hover:text-white"
          >
            <ChevronDoubleRightIcon className="w-8" />
          </button>
        )}
        renderBottomCenterControls={({
          slideCount,
          currentSlide,
          goToSlide,
        }) => (
          <div className="flex gap-4">
            {[...Array(slideCount)].map((e, key) => (
              <div
                className={currentSlide == key ? 'active' : undefined}
                key={key}
              >
                <button
                  type="button"
                  aria-label="slide 1 bullet"
                  onClick={() => goToSlide(key)}
                >
                  {/* º */}
                </button>
              </div>
            ))}
          </div>
        )}
        wrapAround={true}
        autoplay={true}
        autoplayInterval={4000}
        slidesToShow={slides}
      >
        {LogoImg.map((img, key) => (
          <img
            src={img}
            key={key}
            className="object-cover h-16 transition ease-in-out delay-50 hover:scale-105 duration-300"
            alt="Profile image of Juan Pablo Candela"
          />
        ))}
      </Carousel>
    </Fragment>
  );
};
export default CarouselLogo;

