import React from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import { benefitsSection, benefitsItems, benefit } from './Benefits.module.scss';

const Benefits = ({ primary, items }) => {
  const { title } = primary;
  const benefits = items.map((item, index) => {
    const { icon, title, description } = item;
    const { url: iconUrl, alt } = icon;

    return (
      <div className={benefit} key={index}>
        <img src={iconUrl} alt={alt} loading="lazy" width="64" />
        <h3>{title.text}</h3>
        <p>{description.text}</p>
      </div>
    );
  });

  return (
    <div className={benefitsSection}>
      <RichText render={title.raw} />
      <div className={benefitsItems}>{benefits}</div>
    </div>
  );
};

Benefits.propTypes = {
  primary: object,
  items: array,
};

export default Benefits;
