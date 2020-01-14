import React from 'react';

import Button from './ButtonRoot';

const ButtonDefault = ({ ...props }) => {
  return <Button variant="outlined" {...props} />;
};

export default ButtonDefault;
