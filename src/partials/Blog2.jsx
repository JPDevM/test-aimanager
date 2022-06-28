// Dependencies
import React from 'react';
import { useEffect, useState } from 'react';

// Middlewares
import GhostContentAPI from '@tryghost/content-api';
// Components

// Styles

// Media

const Blog = () => {
  const [post, setPost] = useState('cargando...'); // Array
  const [post2, setPost2] = useState('cargando...'); // Array

  const api = new GhostContentAPI({
    url: 'https://blog.aimanager.online',
    key: '2e45c8c7cd154e5c54aaa667e3',
    version: 'v3',
  });

  // fetch 5 posts, including related tags and authors
  api.posts
    .browse({ limit: 2, include: 'tags,authors' })
    .then((posts) => {
      console.log(posts);
      posts.forEach((post) => setPost(post.title));
    })
    // terminar de cargar el segundo post y el comentario
    .catch((err) => {
      console.error(err);
    });

  return (
    <section className="relative">
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
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Blog</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Espacio de informacón selecionada de interés para nuestra
              comunidad.
            </p>
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
                    {post}
                  </div>
                  <p className="text-lg font-light mb-4">
                    Text from blog <br />
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
                    Title from blog
                  </p>
                  <p className="text-lg font-light mb-4">Text from blog</p>
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
