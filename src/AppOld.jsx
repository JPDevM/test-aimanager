// Dependencies
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import 'dotenv/config';
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-225380906-1'; // Google Analytics Tracking ID
ReactGA.initialize(TRACKING_ID);
import TagManager from 'react-gtm-module';
const tagManagerArgs = { gtmId: 'GTM-P6GNNFM' }; // Google Tag Manager Tracking ID
TagManager.initialize(tagManagerArgs);
// Middlewares

// Components
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Trial from './pages/Trial';
import Aplications from './pages/Aplications';
import Tools from './pages/Tools';
import BackOffice from './pages/BackOffice';
import Survey from './pages/Survey';
import ResetPassword from './pages/ResetPassword';
import TermsAndCond from './pages/termsAndCond';
import Privacy from './pages/Privacy';
import Forms from './pages/Forms';

// Styles
import './css/style.scss';
import AOS from 'aos';

// Media

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        {/* Landing */}
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/aplications" element={<Aplications />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/backoffice" element={<BackOffice />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/term-and-cond" element={<TermsAndCond />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Main */}
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </>
  );
}

export default App;
