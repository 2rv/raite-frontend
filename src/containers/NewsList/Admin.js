import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isLoaded, getData, isLoading, isError } from '../../utils/store';
import { redirect } from '../../utils/navigation';

import { getNewsListAll } from '../../actions/newsList';
import { adminNavigatePath } from '../../actions/navigate';

import ROUTES from '../../constants/routes';

import NewsList from './NewsList';
import ListHeader from './ListHeader';

import { Loader, LoadError } from '../../components';

class NewsListAdminContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(adminNavigatePath(ROUTES.ADMIN_NEWS));
    dispatch(getNewsListAll());
  }

  redirectToNewsPage = (id) => {
    redirect(`${ROUTES.ADMIN_NEWS}/${id}`);
  };

  redirectToCreateNewsPage = () => {
    redirect(ROUTES.ADMIN_NEWS_CREATE);
  };

  render() {
    const { data, isDataLoaded, isDataLoading, isDataError, errorMessage } = this.props;

    return (
      <React.Fragment>
        <ListHeader actionCreateNews={this.redirectToCreateNewsPage} />
        {isDataError && <LoadError message={errorMessage} />}
        {isDataLoading && <Loader />}
        {isDataLoaded && (
          <NewsList
            actionCreateNews={this.redirectToCreateNewsPage}
            actionOpenNews={this.redirectToNewsPage}
            items={data}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ newsList: { newsList, error } }) => ({
  isDataLoaded: isLoaded(newsList),
  isDataLoading: isLoading(newsList),
  isDataError: isError(newsList),
  errorMessage: error,
  data: getData(newsList, []),
});

NewsListAdminContainer.propTypes = {
  data: PropTypes.array.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  isDataError: PropTypes.bool.isRequired,
  isDataLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default connect(mapStateToProps)(NewsListAdminContainer);
