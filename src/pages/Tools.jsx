// Dependences
import React, { Fragment } from 'react';

// Resourses
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

// Components
import Tecnologies from '../partials/Tecnologies';

// Links

// Media
import Tools1 from '../images/Tools/tools01.png';

const Tools = () => {
  return (
    <Fragment>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <main className="flex-grow py-20">
          {/*  Page sections */}
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <p className="mt-20 text-3xl leading-normal font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">
                  Herramientas y diferenciales
                </p>
                <p className="mt-10 max-w-6xl text-xl text-gray-500 lg:mx-auto">
                  <span className="text-orange-500">AiManager</span> es una
                  herramienta polifacética que se adapta a los requerimientos de
                  vuestra compañía o equipo de trabajo. Las distintas soluciones
                  que brinda, contribuirán a que pueda seguir el cumplimiento de
                  los procesos y procedimiento en tiempo real en cada una de sus
                  unidades de negocio descentralizadas, estableciendo niveles de
                  calidad de su cumplimiento.
                </p>
                <p className="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">
                  El principal diferencial que ofrecemos frente a otras
                  plataformas, radica en la versatilidad, acompañamiento de
                  nuestro equipo de asesores y la trazabilidad del sistema de
                  control cruzado que podemos implementar en forma rápida y
                  ágil. Para complicarla, tendremos tiempo más adelante y con
                  datos concretos de su operación.
                </p>
              </div>

              {/* Feature List */}
              <div className="flex justify-center pt-20">
                <img
                  className="flex justify-center"
                  src={Tools1}
                  alt="imagen aplicación 1"
                />
              </div>

              {/* Disclosure */}
              <div className="pt-20">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                        <span>Nos fusionamos con su compañía.</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-orange-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                        Nos adaptamos y trabajamos con la metodología,
                        estructuras y procesos de cada uno de nuestros clientes,
                        y de acuerdo a ello, desarrollamos los sistemas de
                        coordinación y control sumando nuestra experiencia y
                        conocimientos. Podemos unirnos a otras soluciones que
                        estén en uso y tomar información de otros recursos con
                        los que cuenta la compañía: ERPs, CRM, etc. Sumado a
                        ello, entendemos que la información o datos de contexto
                        a los que podamos acceder, serán un plus de información
                        que permitirá poder optimizar nuestro servicio y es por
                        ello que siempre encontramos como sumar datos a su
                        gestión.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                        <span>Sepa lo que sucede, cuando sucede</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-orange-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                        Vea todo en tiempo real: la ejecución de auditorías,
                        checklist operativos, informes, asignación de tareas y
                        manejo de las incidencias. Todo lo que sucede lo podrá
                        saber y quedará registrado en el historial de cada
                        Unidad de Gestión o personal vinculado a ello, pudiendo
                        acceder a toda la información en cualquier momento.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                        <span>Decisiones consolidadas con datos</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-orange-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                        Con toda la información y datos que podemos obtener del
                        día a día de la compañía, brindamos un completo tablero
                        de comando, donde podrá ver los indicadores que necesite
                        conocer para tomar sus decisiones. En este aspecto, con
                        historial generado, podemos sumar “inteligencia” que le
                        permitirá gestionar en función de las métricas propias
                        del equipo. Con datos, podremos tomar las mejores
                        decisiones.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              <Tecnologies />
            </div>
          </div>
        </main>
      </div>
      )
    </Fragment>
  );
};

export default Tools;
