import React, { Component } from 'react';

import { Page, Section } from '../../../../layouts';
import Head from '../../../_head';

import AdminHeader from '../../../../containers/Header/AdminHeader';
import NewsCreate from '../../../../containers/NewsCreate';

class HomePage extends Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <Page>
        <Head />
        <AdminHeader />
        <Section>
          <NewsCreate />
        </Section>
      </Page>
    );
  }
}

export default HomePage;
