// Dependencies
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// Middlewares

// Components

// Styles

// Media
import Image from '../images/cover/img_009_width600px.png';

const Newsletter = () => {
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
    <section className="pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <img src={Image} alt="Robot hand" />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">
                  Desde la experiencia, evolucionamos la gestión.
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Comience a utilizar{' '}
                  <span className="text-orange-500">AiManager</span> junto con
                  un consultor que lo acompañará durante proceso. Toda la
                  información y actualizaciones del día a día que se incorporen,
                  se sincronizan en tiempo real en su entorno de trabajo.
                </p>
                <h4 className="h3 text-white mb-2">¿Comenzamos?</h4>

                {/* CTA form */}
                <form
                  className="w-full lg:w-auto"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      id="newsletter"
                      type="email"
                      name="user_email"
                      className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Email…"
                      aria-label="Email…"
                      required
                    />
                    <button
                      type="submit"
                      value="Send"
                      className="btn text-white bg-orange-500 hover:bg-orange-500 shadow"
                      aria-label="Subscribirse"
                    >
                      Subscribirse
                    </button>
                  </div>
                  {/* Success message */}
                  {subscriptionLabel && (
                    <p className="text-sm text-white mt-3">Subscripto!</p>
                  )}
                  <p className="text-sm text-gray-400 mt-3">
                    15 días de prueba gratis. No se requiere tarjeta de crédito.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
