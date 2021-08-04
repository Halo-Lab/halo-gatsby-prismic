import React from 'react';
import { object } from 'prop-types';

const Conversion = ({ primary }) => {
  const { buttontext, cta, placeholder } = primary;

  return (
    <div className="conversion mb-5">
      <h3>{cta.text}</h3>
      <form>
        <label htmlFor="exampleInputEmail1" className="form-label">
          {placeholder.text}
        </label>
        <input
          type="email"
          className="form-control mb-3"
          aria-describedby="emailHelp"
        ></input>
        <button type="submit" className="btn btn-primary">
          {buttontext.text}
        </button>
      </form>
    </div>
  );
};

Conversion.propTypes = {
  primary: object,
};

export default Conversion;
