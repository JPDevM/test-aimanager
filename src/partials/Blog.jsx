// Dependencies
import React from 'react';
import { useEffect, useState } from 'react';

// Middlewares
// Components
// Styles
// Media

const Blog = () => {
  const [post, setPost] = useState([]); // Array
  const ContentAPIKey = '2e45c8c7cd154e5c54aaa667e3';
  const UrlAPI = 'https://blog.aimanager.online';

  async function initBlog() {
    // https://blog.aimanager.online/ghost/api/v3/content/posts/?key=2e45c8c7cd154e5c54aaa667e3&fields=title,url&limit=1
    let getTitle = `${ContentAPIKey}/ghost/api/v3/content/posts/?key=${UrlAPI}&fields=title,url&limit=1`;
    let getContent = `${ContentAPIKey}/ghost/api/v3/content/posts/?key=${UrlAPI}&fields=title,url&limit=1`;
    await fetch(getTitle, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('json', JSON.parse(json));
      });
    // .catch((err) => console.error(err));
  }
  initBlog();

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
                    Title from blog ??¿¿{post}
                  </div>
                  <p className="text-lg font-light mb-4">
                    Text from blog <br />
                    https://gloathost.com/blog/how-to-show-your-latest-ghost-blog-post-on-your-homepage/
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
