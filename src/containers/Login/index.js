import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORMS_NAMES } from '../../constants';
import { LOGIN } from '../../constants/fields';

import { validate } from '../../validations/login';
import { login } from '../../actions/login';
import LoginForm from './Form';

class LoginContainer extends Component {
  login = (form) => {
    const { dispatch } = this.props;

    return dispatch(login(form[LOGIN.USERNAME], form[LOGIN.PASSWORD]));
  };

  isFormDisabled = () => {
    const { valid, pristine, submitting } = this.props;

    return !valid || pristine || submitting;
  };

  render() {
    const { submitting, handleSubmit, errorMessage } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.login(form))}>
        <LoginForm submitting={submitting} error={errorMessage} disabled={this.isFormDisabled()} />
      </form>
    );
  }
}

const loginForm = reduxForm({
  form: FORMS_NAMES.LOGIN,
  validate,
});

const mapStateToProps = ({ login: { error } }) => ({
  errorMessage: error,
});

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default compose(connect(mapStateToProps), loginForm)(LoginContainer);
