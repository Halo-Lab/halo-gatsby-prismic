import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const renderPosts = (posts) => {
  const postsList = posts.map(({ node: post }) => {
    const { data: postData, uid: postPath } = post;
    const {
      author,
      date,
      posttitle: postTitle,
      metadescription: postDescription,
      cover,
    } = postData;
    const { gatsbyImageData, alt } = cover;
    const postUrl = `/blog/${postPath}`;

    return (
      <div className="postCard" key={`${postTitle.text}, ${date}`}>
        <div className="card-image" style={{ width: 250 }}>
          <GatsbyImage image={gatsbyImageData} alt={alt} loading="eager" />
        </div>
        <h3>{postTitle.text}</h3>
        <div>Written by {author.text}</div>
        <div>Published at {date}</div>
        <p>{postDescription.text}</p>
        <Link to={postUrl}>Read more</Link>
      </div>
    );
  });

  return postsList;
};

const LatestPosts = ({ blogPosts }) => {
  return <div>{renderPosts(blogPosts)}</div>;
};

LatestPosts.propTypes = {
  blogPosts: PropTypes.array.isRequired,
};

export default LatestPosts;
