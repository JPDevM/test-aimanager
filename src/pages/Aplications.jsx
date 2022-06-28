// Dependences
import React, { Fragment } from 'react';

// Components
import Newsletter from '../partials/Newsletter';
import CarouselLogo from '../partials/CarouselLogos';

// Links

// Media
import AplicationHero from '../images/Aplications/AplicationHero.png';

import Aplication1 from '../images/Aplications/aplications01.png';
import Aplication2 from '../images/Aplications/aplications02.png';
import Aplication3 from '../images/Aplications/aplications03.png';
import Aplication4 from '../images/Aplications/aplications04.png';
import Aplication5 from '../images/Aplications/aplications05.png';

import Industry01 from '../images/Aplications/industry01.jpg';
import Industry02 from '../images/Aplications/industry02.jpg';
import Industry03 from '../images/Aplications/industry03.jpg';
import Industry04 from '../images/Aplications/industry04.jpg';
import Industry05 from '../images/Aplications/industry05.jpg';
import Industry06 from '../images/Aplications/industry06.jpg';

const features = [
  {
    image: Industry01,
    name: 'CADENAS COMERCIALES Y FRANQUICIAS',
    description:
      'Gestiona todos tus locales o tiendas, desde un mismo lugar, replicando con éxito el modelo de negocio.',
    link: 'https://blog.aimanager.online/cadenas-comerciales-y-franquicias/',
  },
  {
    image: Industry02,
    name: 'CENTROS COMERCIALES Y GRANDES TIENDAS',
    description:
      'Optimizamos la operatividad interna de todas las áreas, asegurando la experiencia de compra para su cliente.',
    link: 'https://blog.aimanager.online/centros-comerciales-y-grandes-tiendas/',
  },
  {
    image: Industry03,
    name: 'EQUIPOS DE REFORMAS DESCENTRALIZADOS',
    description:
      'Coordine y mantenga el seguimiento de ejecución de las tareas en cada lugar de trabajo.',
    link: 'https://blog.aimanager.online/equipos-de-reformas-descentralizados/',
  },
  {
    image: Industry04,
    name: 'GESTIÓN DE CALIDAD Y CERTIFICACIÓN DE NORMAS',
    description:
      'Digitalizamos el proceso de certificación de diferentes normas internacionales de calidad, monitoreando su cumplimiento y ejecución.',
    link: 'https://blog.aimanager.online/gestion-de-calidad-y-certificacion-de-normas/',
  },
  {
    image: Industry05,
    name: 'AUDITORÍAS, CHECKLIST Y GESTIÓN DE INCIDENCIAS',
    description:
      'Sistema georeferencial de control interno y automatizado, con alertas y generación de acciones correctivas inmediatas.',
    link: 'https://blog.aimanager.online/auditorias-checklist-y-gestion-de-incidencias/',
  },
  {
    image: Industry06,
    name: 'MAPA DE SENTIMIENTO Y SATISFACCIÓN DEL CLIENTE',
    description:
      'LoGeneramos un canal de comunicación para saber cómo se siente su cliente y su nivel de satisfacción con su marca.',
    link: 'https://blog.aimanager.online/mapa-de-sentimiento-y-satisfaccion-del-cliente/',
  },
];
const Aplications = () => {
  const Industries = [];

  return (
    <Fragment>
      <img
        className="lg:overflow-hidden relative bg-right bg-cover w-full"
        src={AplicationHero}
        alt="AiManager Aplications Hero"
      />
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <main className="flex-grow py-20">
          {/*  Page sections */}
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Carousel Logo MOBILE */}
              <div className="mx-8 sm:hidden">
                <CarouselLogo slides="1" />
              </div>
              {/* Carousel Logo SMALL */}
              <div className="hidden sm:block md:hidden mx-8">
                <CarouselLogo slides="2" />
              </div>
              {/* Carousel Logo MEDIUM */}
              <div className="hidden md:block">
                <CarouselLogo slides="3" />
              </div>
              <div className="lg:text-center">
                <p className="mt-20 text-3xl leading-normal font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">
                  Industrias y aplicaciones
                </p>
                <p className="mt-10 max-w-6xl text-xl text-justify text-gray-500 lg:mx-auto">
                  Nuestro conocimiento en operaciones, planificación avanzada
                  asistida por IA y experiencia de usuario, nos ha permitido
                  desarrollar un sistema fácil de usar, que permite un proceso
                  de implementación exitoso que garantiza un rápido escalado en
                  la compañía.
                </p>
              </div>
              {/* Feature List */}
              <div className="mt-20">
                <dl className="space-y-10 md:space-y-0 grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                  {features.map((feature) => (
                    <div key={feature.name}>
                      <a href={feature.link}>
                        <div className="p-2 rounded cursor-pointer transition hover:scale-105 tran hover:bg-orange-500 hover:text-white">
                          <dt>
                            <div className="flex items-center justify-left">
                              <img
                                className="h-20 bg-cover"
                                src={feature.image}
                                alt="Industy image"
                              />
                            </div>
                            <p className="text-lg leading-6 font-medium text-gray-900 capitalize pt-4">
                              {feature.name}
                            </p>
                          </dt>
                          <dd className="mt-2 text-base text-gray-700 text-justify">
                            {feature.description}
                          </dd>
                        </div>
                      </a>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex justify-center pt-20">
                <img
                  className="flex justify-center"
                  src={Aplication1}
                  alt="imagen aplicación 1"
                />
              </div>
              {/* Feature 1 */}
              <div className="pt-20">
                <p className="text-3xl leading-normal font-medium text-gray-900">
                  Control cruzado y permanente
                </p>
              </div>
              <div className="max-h-fit">
                <img
                  className="float-left w-1/3 object-cover content-center mr-4"
                  src={Aplication2}
                  alt="imagen aplicación 1"
                />
                <p className="mt-4 text-base text-justify text-gray-500">
                  En forma ágil podrá implementar controles cruzados a través de
                  checklist operativos que deberán realizar los responsables de
                  las diferentes unides de gestión (negocios, tiendas, locales,
                  etc), los cuales se sumarán a las Auditorias que realiza su
                  personal de operaciones o externos a su compañía (por ejemplo
                  MisterShopper).
                </p>
                <p className="mt-2 text-base text-justify text-gray-500">
                  Toda la información que se obtiene respecto a la gestión, se
                  unifica en un tablero de control en donde podrá observar
                  puntaje de cumplimiento u otros indicadores de rendimiento
                  para descubrir fácilmente los mejores operadores según sus
                  diferentes criterios de análisis.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col pt-20 md:flex-row">
                <div className="md:w-2/3 md:mr-16">
                  <p className="text-3xl leading-normal font-medium text-gray-900">
                    Acción y reacción
                  </p>
                  <p className="mt-4 text-base text-justify text-gray-500">
                    Al mismo tiempo que se incorporan los datos de gestión del
                    día a día desde cada una de las unidades de gestión, en
                    forma automática y en función de los procedimientos
                    operacionales que se establezcan,{' '}
                    <span className="text-orange-500">AiManager</span> realizará
                    la asignación de tareas o acciones preventivas necesarias al
                    personal indicado.
                  </p>
                </div>
                <div className="md:w-1/3 flex relative">
                  <img
                    className="absolute h-full max-h-full object-cover content-center"
                    src={Aplication3}
                    alt="imagen aplicación 1"
                  />
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col-reverse pt-20 md:flex-row">
                <div className="md:w-1/3 flex relative">
                  <img
                    className="absolute w-full max-h-full object-cover content-center"
                    src={Aplication4}
                    alt="imagen aplicación 1"
                  />
                </div>
                <div className="md:w-2/3 md:ml-16">
                  <p className="text-3xl leading-normal font-medium text-gray-900 text">
                    Gestione las incidencias y asigne acciones correctivas
                  </p>
                  <p className="mt-4 text-base text-justify text-gray-500">
                    Acceda a informes, auditorias y checklist de cada Unidad de
                    Gestión en el momento que lo desee, para profundizar su
                    análisis de la gestión de su compañía.
                  </p>
                  <p className="mt-4 text-base text-justify text-gray-500">
                    Compare puntajes y otros indicadores de rendimiento para
                    descubrir fácilmente los aspectos críticos en donde se debe
                    profundizar el acompañamiento y control antes que se
                    conviertan en problemas mayores.
                  </p>
                  <p className="mt-2 text-base text-justify text-gray-500">
                    El sistema de alertas lo mantendrá informado de las
                    situaciones que demanden de su atención y de la evolución de
                    estos procesos.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="flex flex-col pt-20 md:flex-row">
                <div className="md:w-2/3 md:mr-16">
                  <p className="text-3xl leading-normal font-medium text-gray-900">
                    Sepa lo que sucede en tiempo real
                  </p>
                  <p className="mt-4 text-base text-justify text-gray-500">
                    Al mismo tiempo que se incorporan los datos de gestión del
                    día a día desde cada una de las unidades de gestión, en
                    forma automática y en función de los procedimientos
                    operacionales que se establezcan,{' '}
                    <span className="text-orange-500">AiManager</span> realizará
                    la asignación de tareas o acciones preventivas necesarias al
                    personal indicado.
                  </p>
                </div>
                <div className="md:w-1/3 flex relative">
                  <img
                    className="absolute h-full max-h-full object-cover content-center"
                    src={Aplication5}
                    alt="imagen aplicación 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Newsletter */}
        <Newsletter />
      </div>
      )
    </Fragment>
  );
};

export default Aplications;
