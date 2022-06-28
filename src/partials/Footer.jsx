// Dependencies
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
// Middlewares
// Components
// Styles
// Media
import Logo from '../images/aimanager_logo_horizontal_small.png';

const Footer = () => {
  // EmailJS
  // https://www.emailjs.com/docs/examples/reactjs
  // Nueva subscripción al blog
  const form = useRef();
  const serviceID = 'service_j3uwkxs';
  const templateID = 'template_i37c3iy';
  const publicKey = '77Sw2iapxW_RCH7p1';

  const [subscriptionLabel, setSubscriptionLabel] = useState(false); // bolean

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        setSubscriptionLabel(true); // Label
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}

              <Link to="/" className="block" aria-label="Cruip">
                <img
                  className="relative rounded-full"
                  src={Logo}
                  width="200"
                  height=""
                  alt="Logo Aimanager"
                />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                to="../term-and-cond"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Terminos
              </Link>{' '}
              ·{' '}
              <Link
                to="../privacy"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Política de privacidad
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Productos</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Reserve una demo
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="./tools"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Herramientas y diferenciales
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="./aplications"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Industrias y aplicaciones
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="https://blog.aimanager.online/precios"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Precios
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="./survey"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Encuestas de satisfacción
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Recursos</h6>
            <ul className="text-sm">
              {/* <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Documentation
                </a>
              </li> */}
              <li className="mb-2">
                <a
                  href="https://blog.aimanager.online/tutoriales-y-guias"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Tutoriales y Guias
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://blog.aimanager.online"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://blog.aimanager.online/plantillas-y-webinars"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Plantillas y webinars
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="./backoffice"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Backoffice y soporte técnico
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="https://blog.aimanager.online/integraciones"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Integraciones
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Empresa</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="https://blog.aimanager.online/sobre-nosotros"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Sobre nosotros
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://blog.aimanager.online/programa-de-socios"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Programa de socios
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="../privacy"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Política de privacidad
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="https://blog.aimanager.online/testimonios"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribirse</h6>
            <p className="text-sm text-gray-600 mb-4">
              Recibe las últimas noticias y artículos en tu bandeja de entrada
              todos los meses.
            </p>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      name="user_email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Email..."
                      required
                    />
                    <button
                      type="submit"
                      value="Send"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribirse"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {subscriptionLabel && (
                    <p className="mt-2 text-green-600 text-sm">Subscripto!</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://www.linkedin.com/company/aimanager_es"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.instagram.com/aimanager_online/"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.facebook.com/AImanager-105035512165800/"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Creado por{' '}
            <a
              className="text-orange-500 hover:underline"
              href="https://aimanager.online/"
            >
              AiManager
            </a>
            . Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
