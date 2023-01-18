import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Head>
        <meta property="og:description" content="My custom description" />
        <meta charSet="utf-8" />
        <title>nestore | Welcome!</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Head>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button-- button--lg"
            to="/docs/intro">
            Introduction
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Getting Started
          </Link>
          <Link
            className="button button button--lg"
            to="/docs/intro">
            Examples&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
