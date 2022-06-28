// Dependencies
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

// Media
import Image03 from '../images/Survey/survey03.jpg';
import Image04 from '../images/Survey/survey04.png';

// Text thats change
const textFeature = [
  'Geoposicionamos cada uno de sus locales',
  'Automatizamos las notificaciones y gestión de incidencias',
  'Generamos un mapa de sentimiento con sus clientes',
];



const HeroVideo = () => {
  
  return (
    <Fragment>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-5xl">
                  Brindamos los recursos necesarios para que puedas conocer como
                  se siente su cliente{' '}
                  <span className="text-orange-500">
                    cuando visita su local
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-justify">
                  Crea una encuesta inteligente al instante, con múltiples
                  recursos, estableciendo secuencias de pregunta y generación de
                  insidencias automáticas según las respuestas que obtiene.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="my-4 md:my-8 px-4 py-4 md:py-6 lg:py-8 bg-gradient-to-r from-orange-500 to-orange-500 lg:to-transparent w-full sm:max-w-sm lg:max-w-full">
                  <p className="text-white font-medium text-sm sm:text-md lg:text-lg text-center lg:text-left">
                    <span>Geoposicionamos cada uno de sus locales</span>
                    {/* <span>
                      Automatizamos las notificaciones y gestión de incidencias
                    </span>
                    <span>
                      Generamos un mapa de sentimiento con sus clientes
                    </span> */}
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={Image03}
            alt=""
          />
        </div>
      </div>

      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden lg:block lg:absolute lg:inset-0"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-5xl">
                    <span className="block text-gray-900">
                      Cambiar este texto
                    </span>
                    <span className="block text-orange-500">AiManager</span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua ad ad non deserunt sunt.
                </p>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width={640}
                  height={784}
                  fill="none"
                  viewBox="0 0 640 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                      x={118}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    y={72}
                    width={640}
                    height={640}
                    className="text-gray-50"
                    fill="currentColor"
                  />
                  <rect
                    x={118}
                    width={404}
                    height={784}
                    fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                  />
                </svg>
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  {/* Video */}
                  <div className="h-60">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/D9KgwHKjFGg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Image */}
      <div className="w-full">
        <img className="w-full" src={Image04} alt="" />
      </div>
    </Fragment>
  );
};
export default HeroVideo;
