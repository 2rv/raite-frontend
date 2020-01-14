import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORMS_NAMES } from '../../constants';
import { NEWS } from '../../constants/fields';
import ROUTES from '../../constants/routes';
import { NEWS_STATUS } from '../../constants/static';

import { newsDelete, newsEdit } from '../../actions/newsEdit';
import { getQuery, redirect } from '../../utils/navigation';

import NewsEditForm from '../../components/forms/NewsContentForm';

class NewsEditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MENU: null,
      MENU_ACTIVE_ITEM: null,
    };
  }

  componentDidMount() {
    const newsId = getQuery('id') || null;
    this.setState(() => ({
      MENU: [
        { path: ROUTES.ADMIN_NEWS, name: 'NAVIGATION.NEWS_EDIT.ADMIN_NEWS', id: 0 },
        { path: ROUTES.ADMIN_NEWS_VIEW(newsId), name: 'NAVIGATION.NEWS_EDIT.ADMIN_NEWS_VIEW', id: 1 },
        { path: ROUTES.ADMIN_NEWS_EDIT(newsId), name: 'NAVIGATION.NEWS_EDIT.ADMIN_NEWS_EDIT', id: 1 },
      ],
      MENU_ACTIVE_ITEM: ROUTES.ADMIN_NEWS_EDIT(newsId),
    }));
  }

  navigateInMenu = (path) => redirect(path);

  edit = (form) => {
    const { dispatch } = this.props;

    const newsId = getQuery('id');

    return dispatch(
      newsEdit(
        newsId,
        form[NEWS.TITLE],
        form[NEWS.DESCRIPTION],
        form[NEWS.BODY],
        form[NEWS.STATUS],
        form[NEWS.CREATE_DATETIME],
      ),
    );
  };

  delete = () => {
    const { dispatch } = this.props;
    const newsId = getQuery('id');

    return dispatch(newsDelete(newsId));
  };

  isFormDisabled = () => {
    const { valid, pristine, submitting } = this.props;

    return !valid || pristine || submitting;
  };

  render() {
    const { submitting, handleSubmit, errorMessage, message } = this.props;
    const { MENU, MENU_ACTIVE_ITEM } = this.state;

    const newsStatus = NEWS_STATUS;

    return (
      <form onSubmit={handleSubmit((form) => this.edit(form))}>
        <NewsEditForm
          breadcrumbs={MENU}
          breadcrumbActive={MENU_ACTIVE_ITEM}
          breadcrumbsAction={this.navigateInMenu}
          submitting={submitting}
          submitName="NEWS_INTERACTION.FORM.BUTTON_EDIT"
          message={message}
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
  form: FORMS_NAMES.NEWS_EDIT,
});

const mapStateToProps = ({ newsEdit: { error, message } }) => ({
  errorMessage: error,
  message,
});

NewsEditContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  message: PropTypes.string,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default compose(connect(mapStateToProps), newsEditForm)(NewsEditContainer);
