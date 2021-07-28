import React from 'react';
import PropTypes from 'prop-types';

import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';
import Benefits from './components/Benefits/Benefits';
import Conversion from './components/Conversion/Conversion';
import Testimonial from './components/Testimonial/Testimonial';

const Home = ({ content }) => {
  return (
    <div className="homepage">
      {content.map((section, index) => {
        switch (section.slice_type) {
          case 'hero':
            return <Hero {...section} key={`${section.slice_type}${index}`} />;
          case 'feature':
            return (
              <Feature {...section} key={`${section.slice_type}${index}`} />
            );
          case 'benefits':
            return (
              <Benefits {...section} key={`${section.slice_type}${index}`} />
            );
          case 'conversion':
            return (
              <Conversion {...section} key={`${section.slice_type}${index}`} />
            );
          case 'testimonial':
            return (
              <Testimonial {...section} key={`${section.slice_type}${index}`} />
            );
          default:
            throw new Error(`Unknown section type: ${section.slice_type}`);
        }
      })}
    </div>
  );
};

Home.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Home;
