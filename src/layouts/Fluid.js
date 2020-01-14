import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FluidLayout = ({ children, className }) => {
  return <Fluid className={className}>{children}</Fluid>;
};

FluidLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

const Fluid = styled.div`
  width: 100%;
`;

export default FluidLayout;
