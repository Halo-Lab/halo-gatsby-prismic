import React from 'react';
import { object } from 'prop-types';

const Conversion = ({ primary }) => {
  const { buttontext, cta, placeholder } = primary;

  return (
    <div className="conversion">
      <h3>{cta.text}</h3>
      <form>
        <input type="email" placeholder={placeholder.text} />
        <button>{buttontext.text}</button>
      </form>
    </div>
  );
};

Conversion.propTypes = {
  primary: object,
};

export default Conversion;
