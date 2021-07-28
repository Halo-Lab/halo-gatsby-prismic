import React from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const Benefits = ({ primary, items }) => {
  const { title } = primary;
  const benefits = items.map((item, index) => {
    const { icon, title, description } = item;
    const { url: iconUrl, alt } = icon;

    return (
      <div className="benefit" key={index}>
        <img src={iconUrl} alt={alt} loading="lazy" width="64" />
        <h3>{title.text}</h3>
        <p>{description.text}</p>
      </div>
    );
  });

  return (
    <div className="feature">
      <RichText render={title.raw} />
      {benefits}
    </div>
  );
};

Benefits.propTypes = {
  primary: object,
  items: array,
};

export default Benefits;
