// Dependencies
import React from 'react';
import { useEffect, useState } from 'react';

// Middlewares
// Components
import Post from './Post';
// Styles
// Media

const Blog = () => {
  const posts = [
    {
      img: 'https://blog.aimanager.online/content/images/size/w1200/2022/04/webpnet-resizeimage-2022-04-14t113424724.jpg',
      title:
        ' El desafío de implementar Big Data & Inteligencia Artificial (AI) en Pymes y Autónomos',
      autor: ' By David Sferco 18 de abr. de 2022',
      link: 'https://blog.aimanager.online/el-desafio-de-implementar-bigdata-inteligencia-artificial-para-su-aplicacion-basica/',
    },
    {
      img: 'https://blog.aimanager.online/content/images/size/w1200/2022/03/39-por-ciento-companias-espanolas-preparadas-gestionar-trabajo-hibrido-768x512.jpg',
      title:
        ' El 55% de las compañías españolas consideran que, si no internalizan el trabajo híbrido, comenzarán a perder personal y no serán capaces de atraer talento nuevo. ',
      autor: ' By David Sferco 18 de abr. de 2022',
      link: 'https://blog.aimanager.online/el-55-de-las-companias-espanolas-consideran-que-si-no-acometen-planes-y-procesos-del-trabajo-hibrido-comenzaran-a-perder-personal-y-no-seran-capaces-de-atraer-talento-nuevo/',
    },
    {
      img: 'https://blog.aimanager.online/content/images/size/w1200/2022/03/chief-data-officer-perfil-profesional-critico-75-por-ciento-grandes-empresas-768x512.jpg',
      title:
        ' El Chief Data Officer será un perfil profesional crítico para el 75% de las grandes empresas.',
      autor: ' By David Sferco 18 de abr. de 2022',
      link: 'https://blog.aimanager.online/l-chief-data-officer-sera-un-perfil-profesional-critico-para-el-75-de-las-grandes-empresas/',
    },
    {
      img: 'https://blog.aimanager.online/content/images/size/w1200/2022/03/digitalizacion-pyme-empresa-1.jpg',
      title:
        'La brecha de digitalización entre pymes y grandes empresas es de 15 puntos.',
      autor: ' By David Sferco 18 de abr. de 2022',
      link: 'https://blog.aimanager.online/la-brecha-de-digitalizacion-entre-pymes-y-grandes-empresas-es-de-15-puntos/',
    },
  ];

  return (
    <section className="relative bgPatternCircuitBoardOrange">
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

          {/* Post */}
          <div
            className="grid overflow-hidden grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 gap-4"
            data-aos="zoom-y-out"
          >
            {/* {posts[2].title} */}
            {/* {posts.map((post) => post.title)} */}
            {/* {posts.map((post, key) => (
              <div key={post.title + key}>
                <p>{post.title}</p>
              </div>
            ))} */}
            {posts.map((post, key) => (
              <Post key={post.title + key} {...post} />
            ))}
          </div>

          {/* Action items */}
          <div className="text-right mt-8 text-orange-500 hover:underline">
            <a
              className="btn-sm text-orange-500 bg-white border-orange-500 hover:bg-orange-100 ml-3"
              href="https://blog.aimanager.online"
            >
              Ir al blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
