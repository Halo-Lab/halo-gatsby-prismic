import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { GatsbyImage } from 'gatsby-plugin-image';

const Hero = ({ primary }) => {
  const { heroimage: heroImage, title } = primary;
  const { gatsbyImageData, alt } = heroImage;

  return (
    <div className="hero">
      <RichText render={title.raw} />
      <GatsbyImage image={gatsbyImageData} alt={alt} />
    </div>
  );
};

Hero.propTypes = {
  primary: object,
};

export default Hero;
