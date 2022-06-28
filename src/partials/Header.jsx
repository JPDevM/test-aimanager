// Dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Middlewares
// import useAnalyticsEventTracker from '../analytics/useAnalyticsEventTracker';

// Components

// Styles

// Media
import Logo from '../images/aimanager_logo_horizontal_small.png';

const Header = () => {
  const [top, setTop] = useState(true);

  // const gaEventTracker = useAnalyticsEventTracker('Header');

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img
                className="relative rounded-full w-20 sm:w-28 md:w-40 lg:w-52"
                src={Logo}
                width="200"
                height=""
                alt="Logo AiManager"
              />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="https://blog.aimanager.online"
                  className="hidden text-xs md:text-md lg:text-lg font-medium text-gray-600 hover:text-gray-900 px-5 py-3 md:flex items-center transition duration-150 ease-in-out"
                  // onClick={() => gaEventTracker('clickBlog')}
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  to="/trial"
                  className="hidden text-xs md:text-md lg:text-lg font-medium text-gray-600 hover:text-gray-900 px-5 py-3 md:flex items-center transition duration-150 ease-in-out"
                  // onClick={() => gaEventTracker('cickTrial')}
                >
                  Empezar prueba
                </Link>
              </li>
              <li>
                <a
                  href="https://dutygestion.com/inicio/"
                  className="text-xs md:text-md lg:text-lg btn-sm text-white bg-orange-500 hover:bg-orange-700 ml-3"
                  // onClick={() => gaEventTracker('clickDutty')}
                >
                  <span>Iniciar sesión</span>
                  <svg
                    className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
