import React, { Component } from 'react';

import { Page } from '../layouts';
import Head from './_head';

class HomePage extends Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <Page>
        <Head />
        Home page
      </Page>
    );
  }
}

export default HomePage;
