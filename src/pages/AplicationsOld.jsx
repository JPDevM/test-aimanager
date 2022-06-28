// Dependences
import React, { Fragment } from 'react';
import {
  InformationCircleIcon,
  UserGroupIcon,
  ScaleIcon,
  ClipboardListIcon,
  CheckIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline';

// Components
import Newsletter from '../partials/Newsletter';

// Links

// Media
import Aplication1 from '../images/Aplications/aplications01.png';
import Aplication2 from '../images/Aplications/aplications02.png';
import Aplication3 from '../images/Aplications/aplications03.png';
import Aplication4 from '../images/Aplications/aplications04.png';
import Aplication5 from '../images/Aplications/aplications05.png';

const features = [
  {
    name: 'Gestión y coordinación de cadenas comerciales',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: InformationCircleIcon,
    link: '../pages/termsAndCond.jsx',
  },
  {
    name: 'Ejecución de auditorías y checklist con gestión de incidencias',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
    link: '../pages/termsAndCond.jsx',
  },
  {
    name: 'información de satisfacción del cliente',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: UserGroupIcon,
    link: '../pages/termsAndCond.jsx',
  },
  {
    name: 'Gestión de procesos de calidad y certificación de normas',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CheckIcon,
    link: '../pages/termsAndCond.jsx',
  },
  {
    name: 'Administración y supervición de unidades de negocio desentralizadas',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: TrendingUpIcon,
    link: '../pages/termsAndCond.jsx',
  },
  {
    name: 'Desarrollo del proceso de Scouting deportivo',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ClipboardListIcon,
    link: '../pages/termsAndCond.jsx',
  },
];
const Aplications = () => {
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
                  Industrias y aplicaciones
                </p>
                <p className="mt-10 max-w-6xl text-xl text-gray-500 lg:mx-auto">
                  Nuestro conocimiento en operaciones, planificación avanzada
                  asistida por IA y experiencia de usuario, nos ha permitido
                  desarrollar un sistema fácil de usar, que permite un proceso
                  de implementación exitoso y garantiza un rápido escalado en la
                  empresa.
                </p>
                <p className="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">
                  <span className="text-orange-500">AiManager</span> es una
                  plataforma muy intuitiva y customizable (personaliza) según
                  las necesidades de cada compañía. Nuestro equipo de asesores
                  lo acompañarán en todo momento, para cumplir con sus
                  necesidades particulares.
                </p>
              </div>

              {/* Feature List */}
              <div className="mt-20">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {features.map((feature) => (
                    <div key={feature.name}>
                      {/* <link> */}
                      <div className="relative p-2 rounded cursor-pointer transition hover:scale-105 tran hover:bg-orange-100">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                            <feature.icon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="text-lg ml-16 leading-6 font-medium text-gray-900">
                            {feature.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                          {feature.description}
                        </dd>
                      </div>
                      {/* </link> */}
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
              <div className="flex flex-col-reverse pt-20 md:flex-row">
                <div className="md:w-1/3 flex relative">
                  <img
                    className="absolute w-full max-h-full object-cover content-center"
                    src={Aplication2}
                    alt="imagen aplicación 1"
                  />
                </div>
                <div className="md:w-2/3 md:ml-16">
                  <p className="text-3xl leading-normal font-medium text-gray-900">
                    Control cruzado y permanente
                  </p>
                  <p className="mt-4 text-base text-gray-500">
                    En forma ágil podrá implementar controles cruzados a través
                    de checklist operativos que deberán realizar los
                    responsables de las diferentes unides de gestión (negocios,
                    tiendas, locales, etc), los cuales se sumarán a las
                    Auditorias que realiza su personal de operaciones o externos
                    a su compañía (por ejemplo MisterShopper).
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    Toda la información que se obtiene respecto a la gestión, se
                    unifica en un tablero de control en donde podrá observar
                    puntaje de cumplimiento u otros indicadores de rendimiento
                    para descubrir fácilmente los mejores operadores según sus
                    diferentes criterios de análisis.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col pt-20 md:flex-row">
                <div className="md:w-2/3 md:mr-16">
                  <p className="text-3xl leading-normal font-medium text-gray-900">
                    Acción y reacción
                  </p>
                  <p className="mt-4 text-base text-gray-500">
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
                  <p className="mt-4 text-base text-gray-500">
                    Acceda a informes, auditorias y checklist de cada Unidad de
                    Gestión en el momento que lo desee, para profundizar su
                    análisis de la gestión de su compañía.
                  </p>
                  <p className="mt-4 text-base text-gray-500">
                    Compare puntajes y otros indicadores de rendimiento para
                    descubrir fácilmente los aspectos críticos en donde se debe
                    profundizar el acompañamiento y control antes que se
                    conviertan en problemas mayores.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
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
                  <p className="mt-4 text-base text-gray-500">
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
