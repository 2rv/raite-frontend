import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from '../../layouts';
import { Divider } from '../../components';
import { Button } from '../../components/buttons';

import { sizes } from '../../theme';

const ListHeader = ({ actionCreateNews }) => {
  return (
    <Fluid>
      <Responsive>
        <Padding>
          <Button tid="NEWS_LIST.BUTTON_NEWS_CREATE" onClick={actionCreateNews} />
          <DividerContent />
        </Padding>
      </Responsive>
    </Fluid>
  );
};

ListHeader.propTypes = {
  actionCreateNews: PropTypes.func.isRequired,
};

const DividerContent = styled(Divider)`
  margin-top: ${sizes.spacing.sm};
  margin-bottom: ${sizes.spacing.md};
`;

export default ListHeader;
