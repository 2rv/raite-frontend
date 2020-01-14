import React from 'react';

import Button from './ButtonRoot';

const TextButton = ({ ...props }) => {
  return <Button variant="text" color="primary" {...props} />;
};

export default TextButton;
