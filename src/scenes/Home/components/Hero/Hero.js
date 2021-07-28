import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { GatsbyImage } from 'gatsby-plugin-image';

const Hero = ({ primary }) => {
  const { heroimage: heroImage, title } = primary;
  const { gatsbyImageData, alt } = heroImage;

  return (
    <div className="hero d-flex justify-content-between mb-5">
      <div className="hero-title align-self-center">
        <RichText render={title.raw} />
      </div>
      <GatsbyImage image={gatsbyImageData} alt={alt} />
    </div>
  );
};

Hero.propTypes = {
  primary: object,
};

export default Hero;
