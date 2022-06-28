// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components
import GeneralState from '../utils/GeneralState';
import MasterSearch from '../utils/MasterSearch';
// Styles

// Media

const forms = () => {
  return (
    <Fragment>
      <div className="bg-blend-darken">
        <GeneralState />
        <MasterSearch />
        <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-4 lg:-mx-6 xl:-mx-6 gap-4">
          <div className="mx-6 w-full overflow-hidden sm:m-4 sm:w-1/2 md:my-6 md:w-1/2 lg:m-8 lg:w-1/3 xl:m-10 xl:w-1/4 flex justify-end">
            {/* Column Content  */}
            {/* <Link to="../algo"> */}
              <button className="h-10 px-4 text-white transition-colors duration-150 bg-green-500 rounded-full focus:shadow-outline hover:bg-green-600">
                Nueva encuesta
              </button>
            {/* </Link> */}
          </div>
          <div className="mx-6 w-full overflow-hidden sm:m-4 sm:w-1/2 md:my-6 md:w-1/2 lg:m-8 lg:w-1/3 xl:m-10 xl:w-1/4 flex flex-col justify-start">
            {/* Column Content  */}
            <p>Información general </p>
            <p>Pictograph bar emoji chart </p>
            <div className="flex flex-row">
              <div className="w-1/6">1</div>
              <div className="w-5/6">😠 😠</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">2</div>
              <div className="w-5/6">🤮 🤮 🤮</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">3</div>
              <div className="w-5/6">😞 😞 😞</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">4</div>
              <div className="w-5/6">😔 😔 😔 😔</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">5</div>
              <div className="w-5/6">😑 😑 😑 😑 😑</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">6</div>
              <div className="w-5/6">😐 😐 😐 😐 😐</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">7</div>
              <div className="w-5/6">😒 😒 😒 😒 😒 😒</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">8</div>
              <div className="w-5/6">🙂 🙂 🙂 🙂 🙂 🙂 </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">9</div>
              <div className="w-5/6">😁 😁 😁 😁</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6">10</div>
              <div className="w-5/6">🤩 🤩</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default forms;
