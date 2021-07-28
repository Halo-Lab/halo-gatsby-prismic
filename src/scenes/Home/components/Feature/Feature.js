import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { GatsbyImage } from 'gatsby-plugin-image';

const Feature = ({ primary }) => {
  const { title, description, featureimage: featureImage } = primary;
  const { gatsbyImageData, alt } = featureImage;

  return (
    <div className="feature">
      <RichText render={title.raw} />
      <RichText render={description.raw} />
      <GatsbyImage image={gatsbyImageData} alt={alt} />
    </div>
  );
};

Feature.propTypes = {
  primary: object,
};

export default Feature;
