import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const ServiceHead = ({ id, title, description, keywords }) => {
  const { t } = useTranslation();

  if (!title) {
    title = t('META.DEFAULT.TITLE');
  } else {
    title = t(`META.${id}.TITLE`);
  }

  if (!description) {
    description = t('META.DEFAULT.DESCRIPTION');
  } else {
    description = t(`META.${id}.DESCRIPTION`);
  }

  if (!keywords) {
    keywords = t('META.DEFAULT.KEYWORDS');
  } else {
    keywords = t(`META.${id}.KEYWORDS`);
  }

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="Keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/static/og-image.png" />
      <meta property="og:image" content="/static/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};

ServiceHead.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default ServiceHead;
