import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../theme';

const SectionLayout = ({ children, className }) => {
  return <Padding className={className}>{children}</Padding>;
};

SectionLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

const Padding = styled.div`
  padding-top: ${sizes.sectionPadding};
  padding-bottom: ${sizes.sectionPadding};
`;

export default SectionLayout;
