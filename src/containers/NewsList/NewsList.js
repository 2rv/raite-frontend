import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Fluid, Responsive, Padding } from '../../layouts';
import { Box } from '../../components';

import { sizes } from '../../theme';
import { Clickable } from '../../theme/elements';

const NewsList = ({ items, actionOpenNews }) => {
  return (
    <Fluid>
      <Container>
        <Padding>
          {items.map(({ id, title, description, createDatetime }) => (
            <React.Fragment key={id}>
              <Item onClick={() => actionOpenNews(id)}>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Time>{createDatetime}</Time>
              </Item>
            </React.Fragment>
          ))}
        </Padding>
      </Container>
    </Fluid>
  );
};

NewsList.propTypes = {
  items: PropTypes.array.isRequired,
  actionOpenNews: PropTypes.func.isRequired,
};

const Time = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: ${sizes.spacing.md};
`;

const Title = styled.strong`
  font-size: 18px;
  margin-bottom: ${sizes.spacing.xs};
`;

const Item = styled(Box)`
  display: flex;
  flex-direction: column;

  padding: ${sizes.spacing.md};
  ${Clickable}

  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing.sm};
  }
`;

const Container = styled(Responsive)`
  min-height: 100vh;
  padding-bottom: 50px;
`;

export default NewsList;
