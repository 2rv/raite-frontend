import React, { Component } from 'react';

import { Page } from '../../layouts';
import Head from '../_head';

import Login from '../../containers/Login';

class LoginPage extends Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <Page>
        <Head />
        <Login />
      </Page>
    );
  }
}

export default LoginPage;
