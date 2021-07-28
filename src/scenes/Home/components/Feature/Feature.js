import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { GatsbyImage } from 'gatsby-plugin-image';

const Feature = ({ primary }) => {
  const { title, description, featureimage: featureImage } = primary;
  const { gatsbyImageData, alt } = featureImage;

  return (
    <div className="feature d-flex justify-content-between mb-5">
      <div className="flex-fill">
        <GatsbyImage image={gatsbyImageData} alt={alt} />
      </div>
      <div className="feature-description align-self-center text-center">
        <RichText render={title.raw} />
        <RichText render={description.raw} />
      </div>
    </div>
  );
};

Feature.propTypes = {
  primary: object,
};

export default Feature;
