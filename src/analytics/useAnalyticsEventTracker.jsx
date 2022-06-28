// useAnalyticsEventTracker.jsx
// blog-saeloun-com.translate.goog/2022/02/17/how-to-integrate-react-app-with-google-analytics.html?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es

import React from 'react';
import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category = 'Blog category') => {
  const eventTrackerLoging = (action = 'click login', label = 'click login') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
  const eventTrackerTrial = (action = 'click trial', label = 'click trial') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;


const ContactUs = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
  return (
    <div>
      <h3>Contact Us</h3>{' '}
      <div>
        <a href="#" onClick={() => gaEventTracker('call')}>
          Call Us
        </a>{' '}
      </div>{' '}
      <div>
        <a
          href="mailto:someone@example.com"
          onClick={() => gaEventTracker('email')}
        >
          Write to us
        </a>{' '}
      </div>{' '}
    </div>
  );
};
