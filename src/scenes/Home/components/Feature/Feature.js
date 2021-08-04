import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { GatsbyImage } from 'gatsby-plugin-image';

import { feature, featureDescription } from './Feature.module.scss';

const Feature = ({ primary }) => {
  const { title, description, featureimage: featureImage } = primary;
  const { gatsbyImageData, alt } = featureImage;

  return (
    <div className={feature}>
      <GatsbyImage image={gatsbyImageData} alt={alt} loading="eager" />
      <div className={featureDescription}>
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
