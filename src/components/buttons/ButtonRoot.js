import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Text from '../Text';

const ButtonDefault = ({ className, tid, type, disabled, variant, color, onClick }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      variant={variant}
      color={color}
      type={type}
      disabled={disabled}
      className={className}
    >
      <Text tid={tid} />
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)`
  && {
    padding: 7px 14px;
  }
`;

ButtonDefault.propTypes = {
  className: PropTypes.string,
  tid: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonDefault;
