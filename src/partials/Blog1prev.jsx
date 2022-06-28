// Dependencies
import React from 'react';
import { useEffect, useState } from 'react';

// Middlewares
// Components
// Styles
// Media

const Blog = () => {
  return (
    <section
      className="relative bgPatternCircuitBoardOrange"
    >
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-0">
            <h2 className="h2 mb-4">Blog</h2>
            {/* <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Espacio de informacón selecionada de interés para nuestra
              comunidad.
            </p> */}
          </div>

          {/* Testimonials 1*/}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-5 py-5 md:mx-0">
                <a href="https://blog.aimanager.online/el-55-de-las-companias-espanolas-consideran-que-si-no-acometen-planes-y-procesos-del-trabajo-hibrido-comenzaran-a-perder-personal-y-no-seran-capaces-de-atraer-talento-nuevo/">
                  <div
                    id="blogPost"
                    className="block font-bold text-xl not-italic mb-1"
                  >
                    El 55% de las compañías españolas consideran que, si no
                    internalizan el trabajo híbrido, comenzarán a perder
                    personal y no serán capaces de atraer talento nuevo.
                  </div>
                  <p className="text-lg font-light mb-4">
                    Según una nota publicada por el medio Directivos&Gerentes
                    solo "Un 39% de las compañías españolas están preparadas
                    para gestionar el trabajo híbrido.
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Testimonials 2 */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-5 py-5 md:mx-0">
                <a href="https://blog.aimanager.online/l-chief-data-officer-sera-un-perfil-profesional-critico-para-el-75-de-las-grandes-empresas/">
                  <p className="block font-bold text-xl not-italic mb-1">
                    El Chief Data Officer será un perfil profesional crítico
                    para el 75% de las grandes empresas
                  </p>
                  <p className="text-lg font-light mb-4">
                    Las empresas generan cada vez mayor cantidad de datos, que
                    se han convertido en uno de los activos más valiosos de las
                    organizaciones.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="text-right mt-8 text-orange-500 hover:underline">
            <a href="https://blog.aimanager.online">Ir al blog</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
