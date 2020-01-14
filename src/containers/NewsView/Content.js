import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';

import { Fluid, Responsive, Padding } from '../../layouts';
import { Box, Divider, Text } from '../../components';
import { Button } from '../../components/buttons';

import { sizes } from '../../theme';

const NewsList = ({ news, editAction }) => {
  const { id, title, description, createDatetime, body, status } = news;

  return (
    <Fluid>
      <Container>
        <Padding>
          <News>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
            {createDatetime && <Info>{createDatetime}</Info>}
            {status && (
              <Info>
                <Text tid="NEWS_VIEW.STATUS" />: {status}
              </Info>
            )}
            {body && (
              <React.Fragment>
                <ContentDivider />
                <Body>
                  <ReactMarkdown source={body} />
                </Body>
              </React.Fragment>
            )}
            <ContentDivider />
            <ActionBlock>
              <Button onClick={() => editAction(id)} tid="NEWS_VIEW.BUTTON_EDIT" />
            </ActionBlock>
          </News>
        </Padding>
      </Container>
    </Fluid>
  );
};

NewsList.propTypes = {
  news: PropTypes.object.isRequired,
  editAction: PropTypes.func.isRequired,
};

const ActionBlock = styled.div`
  display: flex;
`;

const ContentDivider = styled(Divider)`
  display: block;
  margin: ${sizes.spacing.md} 0;
`;

const Body = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;

const Info = styled.span`
  font-size: 14px;
  margin-bottom: ${sizes.spacing.xs};
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: ${sizes.spacing.xs};
`;

const Title = styled.strong`
  font-size: 18px;
  margin-bottom: ${sizes.spacing.xs};
`;

const News = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: ${sizes.spacing.md};
`;

const Container = styled(Responsive)`
  min-height: 100vh;
`;

export default NewsList;
