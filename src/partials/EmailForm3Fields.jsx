// Dependencies
import React, { useRef, useState, Fragment } from 'react';
import emailjs from '@emailjs/browser';
// Middlewares
// Components
// Styles
// Media

const EmailForm = (props) => {
  // EmailJS
  // https://www.emailjs.com/docs/examples/reactjs
  // Nueva subscripción al blog
  const form = useRef();
  const serviceID = 'service_j3uwkxs';
  const templateID = 'template_goyxfqs';
  const publicKey = '77Sw2iapxW_RCH7p1';

  const [subscriptionLabel, setSubscriptionLabel] = useState(false); // bolean

  const { text, email, textarea } = props;

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
        <div className="flex flex-wrap mb-4 gap-4">
          {/* Text */}
          <div className="w-full">
            <input
              type="text"
              name="user_name"
              className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
              placeholder={text}
            />
          </div>
          {/* Email */}
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
                placeholder={email}
                required
              />
            </div>
          </div>

          {/* TextArea */}
          <div className="w-full">
            <textarea
              name="message"
              className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
              placeholder={textarea}
            />
          </div>
          {/* Submit */}
          <div className="w-full flex flex-row-reverse justify-start gap-4">
            <button
              type="submit"
              value="Send"
              className="btn-sm text-white bg-orange-500 hover:bg-orange-700"
              aria-label="Subscribirse"
            >
              <span>Enviar</span>
            </button>
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
