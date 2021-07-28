import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const Testimonial = ({ primary }) => {
  const { title, name, testimonial, image } = primary;
  const { url: imageUrl, alt } = image;

  return (
    <div className="testimonial mb-5">
      <RichText render={title.raw} />
      <div className="d-flex justify-content-between">
        <img
          src={imageUrl}
          alt={alt}
          loading="lazy"
          width="500"
          className="flex-fill"
        />
        <div className="testimonial-description align-self-center text-center">
          <RichText render={name.raw} />
          <RichText render={testimonial.raw} />
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  primary: object,
};

export default Testimonial;
