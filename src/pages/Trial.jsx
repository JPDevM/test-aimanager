// Dependencies
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Middlewares

// Components

// Styles

// Media

const Trial = () => {
  // EmailJS
  // https://www.emailjs.com/docs/examples/reactjs
  // Nuevo usuario
  const form = useRef();
  const serviceID = 'service_j3uwkxs';
  const templateID = 'template_goyxfqs';
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
    <div className="flex flex-col overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Bienvenido!</h1>
                <p className="pt-8">
                  Te enviaremos por email los accesos ade la plataforma con los
                  que podrás usar sín límites todas las funcionalidades{' '}
                  <span className="text-orange-500 hover:underline">
                    gratis por 15 días
                  </span>
                  .
                </p>
              </div>

              <div className="max-w-sm mx-auto">
                {/* Form */}
                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="emailImput"
                        type="email"
                        name="user_email"
                        className="form-input w-full text-gray-800"
                        placeholder="Ingrese su email"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        value="Send"
                        className="btn text-white bg-orange-500 hover:bg-orange-600 w-full"
                        aria-label="Empezar prueba"
                      >
                        Enviar
                      </button>
                      {/* Success message */}
                      {subscriptionLabel && (
                        <p className="mt-8 text-green-600 text-md text-center">
                          Subscripto!
                          <br />
                          <br />
                          <span className="text-gray-900">
                            En breves recibirás un correo, con los accesos para
                            probar la plataforma.
                            <br />
                            <br />
                            Este proceso lo lleva a cabo un asesor comercial,
                            por favor se paciente.
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Trial;
