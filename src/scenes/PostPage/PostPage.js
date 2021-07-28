import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { GatsbyImage } from 'gatsby-plugin-image';

const PostPage = ({ content }) => {
  const {
    posttitle: postTitle,
    postcontent: postContent,
    date,
    author,
    cover,
  } = content;
  const { gatsbyImageData, alt } = cover;

  const propsWithUniqueKey = (props, key) => {
    return Object.assign(props || {}, { key });
  };

  const htmlSerializer = (type, element, key) => {
    if (type !== 'image') {
      return;
    }

    const props = {
      src: element.url,
      alt: element.alt || '',
      loading: 'lazy',
      width: 300,
    };
    return React.createElement('img', propsWithUniqueKey(props, key));
  };

  return (
    <div className="post">
      <GatsbyImage image={gatsbyImageData} alt={alt} />
      <RichText render={postTitle.raw} />
      <div>Published: {date}</div>
      <div>Written by: {author.text}</div>
      <RichText render={postContent.raw} htmlSerializer={htmlSerializer} />
    </div>
  );
};

PostPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PostPage;
