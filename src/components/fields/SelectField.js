import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import createComponent from '../../utils/createComponent';
import mapError from '../../utils/mapError';

export const createItems = (items) =>
  items.map(({ name, value }) => (
    <MenuItem key={value} value={value}>
      {name}
    </MenuItem>
  ));

const SelectField = ({ className, label, items, helperText, ...props }) => {
  const { name, error } = props;
  const labelId = `${name}-label`;

  return (
    <FormControl variant="outlined" className={className} error={error}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select labelId={labelId} {...props}>
        {createItems(items)}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
};

export default createComponent(SelectField, ({ input: { ...inputProps }, ...props }) => ({
  ...mapError(props),
  ...inputProps,
}));
