import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isLoaded, getData, isLoading, isError } from '../../utils/store';
import { getNewsViewAll } from '../../actions/newsView';
import { getQuery, redirect } from '../../utils/navigation';

import ROUTES from '../../constants/routes';

import Content from './Content';
import { Loader, LoadError } from '../../components';

class NewsViewAdminContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    const newsId = Number(getQuery('id'));

    dispatch(getNewsViewAll(newsId));
  }

  redirectToNewsEditPage = (id) => {
    redirect(`${ROUTES.ADMIN_NEWS}/${id}/edit`);
  };

  render() {
    const { data, isDataLoaded, isDataLoading, isDataError, errorMessage } = this.props;

    return (
      <>
        {isDataError && <LoadError message={errorMessage} />}
        {isDataLoading && <Loader />}
        {isDataLoaded && <Content editAction={this.redirectToNewsEditPage} news={data} />}
      </>
    );
  }
}

const mapStateToProps = ({ newsView: { news, error } }) => ({
  isDataLoaded: isLoaded(news),
  isDataLoading: isLoading(news),
  isDataError: isError(news),
  data: getData(news, {}),
  errorMessage: error,
});

NewsViewAdminContainer.propTypes = {
  data: PropTypes.object.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  isDataLoading: PropTypes.bool.isRequired,
  isDataError: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default connect(mapStateToProps)(NewsViewAdminContainer);
