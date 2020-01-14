import React from 'react';
import PropTypes from 'prop-types';

import { Fluid, Responsive, Padding } from '../layouts';

import Alert from './Alert';

const LoadError = ({ message }) => {
  return (
    <Fluid>
      <Responsive>
        <Padding>
          <Alert tid={`ERROR.${message}`} />
        </Padding>
      </Responsive>
    </Fluid>
  );
};

LoadError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default LoadError;
