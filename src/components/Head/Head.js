import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Head = ({ metatitle, metadescription, canonical }) => {
  const { text: title } = metatitle;
  const { text: description } = metadescription;
  const { text: canonicalUrl } = canonical;

  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <title>{title}</title>
      <meta content={description} name="description" />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

Head.propTypes = {
  canonical: PropTypes.object,
  metatitle: PropTypes.object,
  metadescription: PropTypes.object,
};

export default Head;
