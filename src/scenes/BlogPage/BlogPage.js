import React from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import LatestPosts from './components/LatestPosts/LatestPosts';

const BlogPage = ({ content, blogPosts }) => {
  const { blogtitle: blogTitle, body: pageSections } = content;
  const { primary: form } = pageSections.find(
    (section) => section.slice_type === 'form'
  );

  const {
    adress: adressPlaceholder,
    firstname: firstnamePlaceholder,
    lastname: lastnamePlaceholder,
    formtitle: formTitle,
  } = form;

  return (
    <div className="blogpage">
      <RichText render={blogTitle.raw} />
      <LatestPosts blogPosts={blogPosts} />
      <RichText render={formTitle.raw} />
      <form>
        <input type="email" placeholder={adressPlaceholder.text} />
        <input type="text" placeholder={firstnamePlaceholder.text} />
        <input type="text" placeholder={lastnamePlaceholder.text} />
      </form>
    </div>
  );
};

BlogPage.propTypes = {
  content: object.isRequired,
  blogPosts: array.isRequired,
};

export default BlogPage;
