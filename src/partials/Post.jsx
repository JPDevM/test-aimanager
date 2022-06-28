// Dependencies
import React from 'react';

// Middlewares
// Components
// Styles
// Media

const Post = (props) => {
  const { img, title, autor, link } = props;
  // console.log('img:', img);

  return (
    <a href={link}>
      <div className="bg-white border-orange-500 border min-w-full h-32 min-h-full rounded-md flex flex-row">
        <img
          className="p-4 basis-1/3 h-full object-contain"
          src={img}
          alt="cover del blog"
        />
        <div className="p-4 basis-2/3 h-full overflow-hidden">
          <p className="text-lg font-bold">{ title }</p>
          <p className="text-sm font-normal text-gray-500">{ autor }</p>
        </div>
      </div>
    </a>
  );
};

export default Post;
