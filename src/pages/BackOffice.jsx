// Dependences
import React, { Fragment } from 'react';
import { useState } from 'react';
import { Tab } from '@headlessui/react';

// Components
import EmailForm3Fields from '../partials/EmailForm3Fields';
import Tecnologies from '../partials/Tecnologies';

// Links

// Media
import BackOffice1 from '../images/BackOffice/backoffice.png';
// www.stocklib.es/media-110122763/outline-map-of-argentina-marked-with-ribbon-in-colors-from-the-flag.html?keyword=Outline%20map%20of%20Argentina%20Border%20is%20marked%20with%20a%20ribbon%20in%20the%20national%20colors
import ImgArg from '../images/Tools/tools_arg.png';
import ImgEsp from '../images/Tools/tools_esp.png';
import ImgCol from '../images/Tools/tools_col.png';
import ImgUsa from '../images/Tools/tools_usa.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BackOffice = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <Fragment>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <main className="flex-grow py-20">
          {/*  Page sections */}
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Title and subtitle */}
              <div className="lg:text-center">
                <p className="mt-20 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase leading-normal">
                  Backoffice y soporte técnico
                </p>
                <p className="mt-10 max-w-6xl text-xl text-gray-500 lg:mx-auto">
                  El éxito en la implantación de
                  <span className="text-orange-500">AiManager</span> depende
                  tanto del potencial de la plataforma como de la capacidad del
                  equipo que lo implementa en la empresa o compañía y que sus
                  posteriores usuarios conozcan todas sus funcionalidades.
                </p>
                <p className="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto font-semibold">
                  Teniendo siempre presente que el objetivo de
                  <span className="text-orange-500">AiManager</span> es
                  optimizar los procesos y reducir los costes, es fundamental
                  que la implantación se realice con la colaboración de un
                  experto que acompaña el proceso.
                </p>
              </div>
              {/* Imáge */}
              <div className="max-h-full h-full flex justify-center">
                <img
                  className="max-h-96 h-full py-8"
                  src={BackOffice1}
                  alt="imagen aplicación 1"
                />
              </div>
              {/* Text */}
              <div className="lg:text-center">
                <p className="mt-10 max-w-6xl text-xl text-gray-500 lg:mx-auto">
                  Esta asistencia personalizada está incluida en la contratación
                  del servicio, ya que es clave para el posterior proceso de
                  análisis de resultados y detección de mejoras productivas.
                </p>
              </div>
              {/* Tabs */}
              <div className="flex justify-center">
                <div className="w-full max-w-3xl px-2 py-16 sm:px-0">
                  <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-orange-900/20 p-1">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                            selected
                              ? 'bg-white shadow'
                              : 'text-white hover:bg-white/[0.12] hover:text-orange-500'
                          )
                        }
                      >
                        España 🇪🇸
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                            selected
                              ? 'bg-white shadow'
                              : 'text-white hover:bg-white/[0.12] hover:text-orange-500'
                          )
                        }
                      >
                        Estados Unidos 🇺🇸
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                            selected
                              ? 'bg-white shadow'
                              : 'text-white hover:bg-white/[0.12] hover:text-orange-500'
                          )
                        }
                      >
                        Colombia 🇨🇴
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                            selected
                              ? 'bg-white shadow'
                              : 'text-white hover:bg-white/[0.12] hover:text-orange-500'
                          )
                        }
                      >
                        Argentina 🇦🇷
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                      {/* España 🇪🇸 */}
                      <Tab.Panel>
                        <div className="flex flex-row">
                          <div className="w-2/3 mt-4">
                            <p className="text-gray-800 font-medium mb-2">
                              Déjanos tu email y nos contactaremos contigo
                            </p>
                            <EmailForm3Fields
                              text="Nombre"
                              email="Email..."
                              textarea="¿Cómo podemos ayudarte?"
                            />
                            <p className="text-gray-800 font-medium mb-2">
                              o también puedes agendar una video llamada
                            </p>
                            <a
                              target="_blank"
                              href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NWgxNmd0dnBkcDJodmxjanR2dTh2NzZlcGtfMjAyMjA1MzBUMTQwMDAwWiBkYXZpZEBhaW1hbmFnZXIub25saW5l&amp;tmsrc=david%40aimanager.online&amp;scp=ALL"
                              className="btn-sm text-white bg-orange-500 hover:bg-orange-700"
                            >
                              <span>Agendar una video llamada</span>
                            </a>
                          </div>
                          <div className="w-1/3 p-8">
                            <img
                              className="flex justify-center"
                              src={ImgEsp}
                              alt="imagen aplicación 1"
                            />
                          </div>
                        </div>
                      </Tab.Panel>

                      {/* Estados Unidos 🇺🇸 */}
                      <Tab.Panel>
                        <div className="flex flex-row">
                          <div className="w-2/3 mt-4">
                            <p className="text-gray-800 font-medium mb-2">
                              Déjanos tu email y nos contactaremos contigo
                            </p>
                            <EmailForm3Fields
                              text="Nombre"
                              email="Email..."
                              textarea="¿Cómo podemos ayudarte?"
                            />
                            <p className="text-gray-800 font-medium mb-2">
                              o también puedes agendar una video llamada
                            </p>
                            <a
                              target="_blank"
                              href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NWgxNmd0dnBkcDJodmxjanR2dTh2NzZlcGtfMjAyMjA1MzBUMTQwMDAwWiBkYXZpZEBhaW1hbmFnZXIub25saW5l&amp;tmsrc=david%40aimanager.online&amp;scp=ALL"
                              className="btn-sm text-white bg-orange-500 hover:bg-orange-700"
                            >
                              <span>Agendar una video llamada</span>
                            </a>
                          </div>
                          <div className="w-1/3 p-8">
                            <img
                              className="flex justify-center"
                              src={ImgUsa}
                              alt="imagen aplicación 1"
                            />
                          </div>
                        </div>
                      </Tab.Panel>

                      {/* Colombia 🇨🇴 */}
                      <Tab.Panel>
                        <div className="flex flex-row">
                          <div className="w-2/3 mt-4">
                            <p className="text-gray-800 font-medium mb-2">
                              Déjanos tu email y nos contactaremos contigo
                            </p>
                            <EmailForm3Fields
                              text="Nombre"
                              email="Email..."
                              textarea="¿Cómo podemos ayudarte?"
                            />
                            <p className="text-gray-800 font-medium mb-2">
                              o también puedes agendar una video llamada
                            </p>
                            <a
                              target="_blank"
                              href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NWgxNmd0dnBkcDJodmxjanR2dTh2NzZlcGtfMjAyMjA1MzBUMTQwMDAwWiBkYXZpZEBhaW1hbmFnZXIub25saW5l&amp;tmsrc=david%40aimanager.online&amp;scp=ALL"
                              className="btn-sm text-white bg-orange-500 hover:bg-orange-700"
                            >
                              <span>Agendar una video llamada</span>
                            </a>
                          </div>
                          <div className="w-1/3 p-8">
                            <img
                              className="flex justify-center"
                              src={ImgCol}
                              alt="imagen aplicación 1"
                            />
                          </div>
                        </div>
                      </Tab.Panel>

                      {/* Argentina 🇦🇷 */}
                      <Tab.Panel>
                        <div className="flex flex-row">
                          <div className="w-2/3 mt-4">
                            <p className="text-gray-800 font-medium mb-2">
                              Déjanos tu email y nos contactaremos contigo
                            </p>
                            <EmailForm3Fields
                              text="Nombre"
                              email="Email..."
                              textarea="¿Cómo podemos ayudarte?"
                            />
                            <p className="text-gray-800 font-medium mb-2">
                              o también puedes agendar una video llamada
                            </p>
                            <a
                              target="_blank"
                              href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NWgxNmd0dnBkcDJodmxjanR2dTh2NzZlcGtfMjAyMjA1MzBUMTQwMDAwWiBkYXZpZEBhaW1hbmFnZXIub25saW5l&amp;tmsrc=david%40aimanager.online&amp;scp=ALL"
                              className="btn-sm text-white bg-orange-500 hover:bg-orange-700"
                            >
                              <span>Agendar una video llamada</span>
                            </a>
                          </div>
                          <div className="w-1/3 p-8">
                            <img
                              className="flex justify-center"
                              src={ImgArg}
                              alt="imagen aplicación 1"
                            />
                          </div>
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
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

export default BackOffice;
