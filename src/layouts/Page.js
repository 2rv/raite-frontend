import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fade, colors } from '../theme';
import { APP_PAGE_ID } from '../constants';

const PageLayout = ({ children }) => {
  return <Page id={APP_PAGE_ID}>{children}</Page>;
};

const Page = styled.div`
  animation: ${fade} 1s;
  position: relative;
  min-height: 100vh;
  background-color: ${colors.pageBackground};
`;

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PageLayout;
