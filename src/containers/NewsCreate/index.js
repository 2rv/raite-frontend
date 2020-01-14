import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORMS_NAMES } from '../../constants';
import { NEWS } from '../../constants/fields';
import { NEWS_STATUS } from '../../constants/static';

import { validate } from '../../validations/newsCreate';
import { newsCreate } from '../../actions/newsCreate';

import NewsContentForm from '../../components/forms/NewsContentForm';

class NewsEditContainer extends Component {
  create = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      newsCreate(
        form[NEWS.TITLE],
        form[NEWS.DESCRIPTION],
        form[NEWS.BODY],
        form[NEWS.STATUS],
        form[NEWS.CREATE_DATETIME],
      ),
    );
  };

  isFormDisabled = () => {
    const { valid, pristine, submitting } = this.props;

    return !valid || pristine || submitting;
  };

  render() {
    const { submitting, handleSubmit, errorMessage } = this.props;

    const newsStatus = NEWS_STATUS;

    console.log(errorMessage);

    return (
      <form onSubmit={handleSubmit((form) => this.create(form))}>
        <NewsContentForm
          title="NEWS_INTERACTION.TITLE_CREATE"
          submitName="NEWS_INTERACTION.FORM.BUTTON_CREATE"
          submitting={submitting}
          error={errorMessage}
          disabled={this.isFormDisabled()}
          deleteAction={this.delete}
          newsStatus={newsStatus}
        />
      </form>
    );
  }
}

const newsEditForm = reduxForm({
  form: FORMS_NAMES.NEWS_CREATE,
  validate,
});

const mapStateToProps = ({ newsCreate: { error } }) => ({
  errorMessage: error,
});

NewsEditContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default compose(connect(mapStateToProps), newsEditForm)(NewsEditContainer);
