import React, { Component } from 'react';

import { Page, Section } from '../../../../../layouts';
import Head from '../../../../_head';

import AdminHeader from '../../../../../containers/Header/AdminHeader';
import NewsEdit from '../../../../../containers/NewsEdit';

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
          <NewsEdit />
        </Section>
      </Page>
    );
  }
}

export default HomePage;
