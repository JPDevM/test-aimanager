// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components

// Styles

// Media

const MasterSearch = () => {
  return (
    <Fragment>
      <div className="flex justify-center">
        <form className="m-4 w-full">
          <input
            type="search"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
            id="exampleSearch2"
            placeholder="Buscar"
          />
        </form>
      </div>
    </Fragment>
  );
};
export default MasterSearch;
