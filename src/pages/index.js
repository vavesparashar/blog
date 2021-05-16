import React from 'react';
import Helmet from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { usePosts, useTalks } from 'hooks';

import Layout from 'components/layout';
import ArticleList from 'components/ArticleList';

const Index = ({location, data}) => {

  const posts = usePosts();
  const talks = useTalks();

  const helmet_settings = {
    bodyAttributes: {
      class: 'home',
    }
  };

  return (
    <Layout location={location}>
      <div className="container">

        <Helmet {...helmet_settings} />
        <div className="home-newsletter">
        <div className="container">
          <Link to="/newsletter">
            <span className="home-newsletter-icon">
              📬
            </span>
            <div className="home-newsletter-content">
              <h3>Weekly Newsletter</h3>
              <p>
                Fresh guides & tutorials weekly straight to your inbox!
              </p>
            </div>
            <div className="home-newsletter-button">
              <button>
                Sign Up
              </button>
            </div>
          </Link>
        </div>
      </div>

        <Tabs>
          <TabList>
            <Tab>Lessons</Tab>
            <Tab>Data Analysis</Tab>
          </TabList>
          <TabPanel>
            <ArticleList articles={posts} />
          </TabPanel>
          <TabPanel>
            <ArticleList articles={talks} />
          </TabPanel>
        </Tabs>

      </div>
    </Layout>
  );

}

export default Index;