import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import { Fluid, Responsive, Padding } from '../../layouts';
import { Box, Text, Loader, Alert, Divider, Title } from '..';
import { TextField, SelectField } from '../fields';
import { Button, TextButton } from '../buttons';
import { Breadcrumbs } from '../menus';

import { NEWS } from '../../constants/fields';
import { sizes } from '../../theme';

const NewsContentForm = ({
  disabled,
  submitting,
  submitName,
  error,
  message,
  breadcrumbs,
  breadcrumbActive,
  breadcrumbsAction,
  deleteAction,
  newsStatus,
  title,
}) => {
  return (
    <Fluid>
      <Responsive>
        <Padding>
          <Block>
            {title && <Title tid={title} />}
            {breadcrumbs && (
              <React.Fragment>
                <Breadcrumbs action={breadcrumbsAction} active={breadcrumbActive} items={breadcrumbs} />
                <DividerContent />
              </React.Fragment>
            )}
            {error && <AlertInfo tid={`ERROR.${error}`} />}
            {message && <AlertInfo type="success" tid={message} />}
            <FieldSection>
              <FieldBlock name={NEWS.TITLE} component={TextField} label={<Text tid="NEWS_INTERACTION.FORM.TITLE" />} />
              <FieldBlock
                name={NEWS.DESCRIPTION}
                component={TextField}
                label={<Text tid="NEWS_INTERACTION.FORM.DESCRIPTION" />}
              />
              <FieldBlock name={NEWS.BODY} component={TextField} label={<Text tid="NEWS_INTERACTION.FORM.BODY" />} />
              <FieldBlock
                name={NEWS.STATUS}
                component={SelectField}
                items={newsStatus}
                label={<Text tid="NEWS_INTERACTION.FORM.STATUS" />}
              />
            </FieldSection>
            <DividerContent />
            <ActionBlock>
              <Button disabled={disabled} type="submit" tid={submitName} />
              {deleteAction && <TextButton onClick={deleteAction} tid="NEWS_INTERACTION.FORM.BUTTON_DELETE" />}
            </ActionBlock>
            {submitting && <Loader />}
          </Block>
        </Padding>
      </Responsive>
    </Fluid>
  );
};

NewsContentForm.propTypes = {
  error: PropTypes.string,
  submitName: PropTypes.string.isRequired,
  message: PropTypes.string,
  title: PropTypes.string,
  breadcrumbActive: PropTypes.string,
  disabled: PropTypes.bool,
  submitting: PropTypes.bool,
  breadcrumbs: PropTypes.array,
  breadcrumbsAction: PropTypes.func,
  deleteAction: PropTypes.func,
  newsStatus: PropTypes.array.isRequired,
};

const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DividerContent = styled(Divider)`
  margin: ${sizes.spacing.md} 0px;
`;

const AlertInfo = styled(Alert)`
  margin-bottom: ${sizes.spacing.md};
`;

const FieldBlock = styled(ReduxField)`
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing.md};
  }
`;

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing.md};
`;

const Block = styled(Box)`
  padding: 20px 20px;
`;

export default NewsContentForm;
