import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { GatsbyImage } from 'gatsby-plugin-image';

import { hero, heroTitle } from './Hero.module.scss';

const Hero = ({ primary }) => {
  const { heroimage: heroImage, title } = primary;
  const { gatsbyImageData, alt } = heroImage;

  return (
    <div className={hero}>
      <div className={heroTitle}>
        <RichText render={title.raw} />
      </div>
      <GatsbyImage image={gatsbyImageData} alt={alt} loading="eager" />
    </div>
  );
};

Hero.propTypes = {
  primary: object,
};

export default Hero;
