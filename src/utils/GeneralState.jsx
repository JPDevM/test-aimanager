// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components
import SatisfactionEmoji from '../functions/SatisfactionEmoji';
// Styles

// Media

const GeneralState = () => {

  return (
    <Fragment>
      <div className="flex justify-center w-full h-6 bg-gradient-to-r from-red-700 via-yellow-300 to-green-700 shadow-sm">
        {/* <SatisfactionEmoji props={1} /> */}
        <div className="h-6 w-6 bg-white rounded-full text-center shadow-sm">
          😐
        </div>
      </div>
    </Fragment>
  );
};
export default GeneralState;
