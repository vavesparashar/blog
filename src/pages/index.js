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

        <Helmet {...helmet_settings} >
        <script async src="https://eomail5.com/form/f674b022-f25f-11eb-96e5-06b4694bee2a.js" data-form="f674b022-f25f-11eb-96e5-06b4694bee2a"></script></Helmet>/>

        <Tabs>
          <TabList>
            <Tab>Deep dive</Tab>
            <Tab>Bytes</Tab>
          </TabList>
          <TabPanel>
            <ArticleList articles={talks} />
          </TabPanel>
          <TabPanel>
            <ArticleList articles={posts} />
          </TabPanel>
        </Tabs>

      </div>
    </Layout>
  );

}

export default Index;