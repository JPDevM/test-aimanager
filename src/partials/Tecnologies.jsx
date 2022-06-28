// Dependecies
import React, { Fragment } from 'react';

// Media
import ReactLogo from '../images/Tools/tools_react-logo.png';
import ViteLogo from '../images/Tools/tools_vite-logo.jpeg';
import FireBaseLogo from '../images/Tools/tools_firebase-logo.png';
import TailwindLogo from '../images/Tools/tools_tailwind-logo.png';
import GitHubLogo from '../images/Tools/tools_github-logo.png';
import DigitalOceanLogo from '../images/Tools/tools_digitalocean-logo.png';
import GoogleAnalyticsLogo from '../images/Tools/tools_googleanalytics-logo.png';
import GoogleTagManagerLogo from '../images/Tools/tools_googletagmanager-logo.png';
import PowerBiLogo from '../images/Tools/tools_powerbi-logo.png';
import EmailJSLogo from '../images/Tools/tools_emailjs-logo.png';
import GhostLogo from '../images/Tools/tools_ghost-logo.png';

const Logos = [
  ReactLogo,
  ViteLogo,
  FireBaseLogo,
  TailwindLogo,
  GitHubLogo,
  DigitalOceanLogo,
  GoogleAnalyticsLogo,
  GoogleTagManagerLogo,
  PowerBiLogo,
  EmailJSLogo,
  GhostLogo,
];

const Tecnologies = () => {
  return (
    <div>
      {/* Tecnologías */}
      <div className="lg:text-center">
        <p className="mt-10 max-w-6xl text-3xl text-gray-900 lg:mx-auto">
          Tecnologías que usamos en el desarollo de nuestas soluciones
        </p>
        <p className="mt-2 max-w-6xl text-xl text-gray-500 lg:mx-auto">
          Usamos las últimas tecnologías del mercado para asegurar el mejor
          funcionamiento de nuestas heramientas.
        </p>

        <div className="grid grid-cols-3 justify-items-center gap-8 py-10">
          {Logos.map((Logo, key) => (
            <img className="" src={Logo} alt="imagen aplicación 1" />
          ))}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
export default Tecnologies;
