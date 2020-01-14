import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import { Fluid, Responsive, Padding } from '../../layouts';
import { Box, Title, Text, Loader, Alert } from '../../components';
import { TextField } from '../../components/fields';
import { Button } from '../../components/buttons';

import { LOGIN } from '../../constants/fields';
import { sizes } from '../../theme';

const LoginForm = ({ disabled, submitting, error }) => {
  return (
    <Fluid>
      <Container>
        <Padding>
          <Block>
            <Title tid="LOGIN.FORM.TITLE" />
            {error && <AlertError tid={`ERROR.${error}`} />}
            <FieldSection>
              <FieldBlock name={LOGIN.USERNAME} component={TextField} label={<Text tid="LOGIN.FORM.USERNAME" />} />
              <FieldBlock
                name={LOGIN.PASSWORD}
                component={TextField}
                type="password"
                label={<Text tid="LOGIN.FORM.PASSWORD" />}
              />
            </FieldSection>
            <ButtonSubmit disabled={disabled} type="submit" tid="LOGIN.FORM.BUTTON_LOGIN" />
            {submitting && <Loader />}
          </Block>
        </Padding>
      </Container>
    </Fluid>
  );
};

LoginForm.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  submitting: PropTypes.bool,
};

const ButtonSubmit = styled(Button)`
  width: 100%;
`;

const AlertError = styled(Alert)`
  margin-bottom: ${sizes.spacing.md};
`;

const FieldBlock = styled(ReduxField)`
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing.md};
  }
`;

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing.md};
`;

const Container = styled(Responsive)`
  max-width: 600px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
`;

const Block = styled(Box)`
  padding: 20px 20px;
`;

export default LoginForm;
