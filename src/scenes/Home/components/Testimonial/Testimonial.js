import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const Testimonial = ({ primary }) => {
  const { title, name, testimonial, image } = primary;
  const { url: imageUrl, alt } = image;

  return (
    <div className="testimonial">
      <RichText render={title.raw} />
      <img src={imageUrl} alt={alt} loading="lazy" width="500" />
      <RichText render={name.raw} />
      <RichText render={testimonial.raw} />
    </div>
  );
};

Testimonial.propTypes = {
  primary: object,
};

export default Testimonial;
