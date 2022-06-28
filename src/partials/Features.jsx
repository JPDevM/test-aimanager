// Dependencies
import React, { useState, useRef, useEffect } from 'react';

// Middlewares

// Components
import Transition from '../utils/Transition';

// Styles

// Media
import FeaturesBg1 from '../images/cover/img_004_width500px.png';
import FeaturesBg2 from '../images/cover/img_005_width500px.png';
import FeaturesBg3 from '../images/cover/img_006_width500px.png';
import FeaturesBg4 from '../images/cover/img_007_width500px.png';
import Icon1 from '../images/icons/iconos_001.png';
import Icon2 from '../images/icons/iconos_002.png';
import Icon3 from '../images/icons/iconos_003.png';
import Icon4 from '../images/icons/iconos_004.png';

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + 'px';
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bgPatternCircuitBoardGray pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <h1 className="h2 mb-4">Digitalizamos sus procesos y compañia.</h1> */}
            {/* <p className="text-xl text-gray-600">
              De forma simple, sencilla y muy rápida,{' '}
              <span className="text-orange-500 hover:underline">AiManager</span>{' '}
              junto a{' '}
              <span className="text-orange-500 hover:underline">
                Duty Gestión
              </span>
              , sistematizan sus procesos de trabajo y establecen un sistema de
              control y medición que le permite conocer de manera permanente, el
              estado de situación de las tareas que realiza su compañía, cadena
              comercial o equipo profesional que se desempeña de manera
              descentralizada. Logre resultados de alto impacto en toda la
              cadena.
            </p> */}
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">
                  Funcionalidades para una gestión de excelencia.
                </h3>
                <p className="text-xl text-gray-600">
                  Unificamos bajo una misma línea de gestión, todos los
                  procedimientos de trabajo, generando un sistema de monitoreo de toda su cadena
                  comercial.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Conecte
                    </div>
                    <div className="text-gray-600">
                      Unifique la información que reciben todos sus
                      colaboradores.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 flex-shrink-0 ml-3">
                    <img src={Icon1} alt="ícono conecte" />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Planifique
                    </div>
                    <div className="text-gray-600">
                      Asigne tareas en tiempo real y siga su cumplimiento.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 flex-shrink-0 ml-3">
                    <img src={Icon2} alt="ícono planifique" />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Controle
                    </div>
                    <div className="text-gray-600">
                      Supervise con auditorías y checklist operativos
                      georeferenciales.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 flex-shrink-0 ml-3">
                    <img src={Icon3} alt="ícono controle" />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg4}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg2}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg1}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg3}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
