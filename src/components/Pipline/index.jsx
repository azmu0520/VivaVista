import React from 'react';
import Content from '../Generic/Content';
import { AntTabs, TabsTabPane } from '../Sections/style';
import { Wrap } from './style';

const Pipline = () => {
  return (
    <Wrap>
      <Content title='Pipline'>
        <AntTabs>
          <TabsTabPane key={1} tab={'Varonkalar'}></TabsTabPane>
          <TabsTabPane key={2} tab={'Doska'}></TabsTabPane>
          <TabsTabPane key={2} tab={'Garizontal'}></TabsTabPane>
        </AntTabs>
      </Content>
    </Wrap>
  );
};

export default Pipline;
