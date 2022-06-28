// Dependencies
import React, { useRef, useState, Fragment } from 'react';
import emailjs from '@emailjs/browser';
// Middlewares
// Components
// Styles
// Media

const EmailForm = () => {
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
    <Fragment>
        {/* Form */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-sm sr-only" htmlFor="newsletter">
                Email
              </label>
              <div className="relative flex items-center max-w-full">
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
                <p className="mt-2 text-green-600 text-sm">Enviado!</p>
              )}
            </div>
          </div>
        </form>
    </Fragment>
  );
};
export default EmailForm;
