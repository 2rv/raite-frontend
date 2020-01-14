import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { redirect } from '../../utils/navigation';

import { logOut } from '../../actions/login';

import ROUTES from '../../constants/routes';

import { InlineMenu } from '../../components/menus';
import { TextButton } from '../../components/buttons';
import { Card } from '../../components';

class AdminHeader extends Component {
  MENU = [
    { path: ROUTES.ADMIN_NEWS, name: 'NAVIGATION.ADMIN.NEWS', id: 0 },
    { path: ROUTES.ADMIN_GDS, name: 'NAVIGATION.ADMIN.GDS', id: 1 },
  ];

  navigateToLink = (path) => redirect(path);

  logOut = () => logOut();

  render() {
    const { activePath } = this.props;

    return (
      <Header>
        <InlineMenu items={this.MENU} action={this.navigateToLink} active={activePath} />
        <TextButton onClick={this.logOut} tid="NAVIGATION.LOGOUT" />
      </Header>
    );
  }
}

const Header = styled(Card)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const mapStateToProps = ({ navigate: { admin } }) => ({
  activePath: admin,
});

AdminHeader.propTypes = {
  activePath: PropTypes.string,
};

export default connect(mapStateToProps)(AdminHeader);
