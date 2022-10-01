import React from 'react';
import Button from '../Button';
import { Wrap } from './style';

const Content = ({ title, children }) => {
  return (
    <Wrap>
      <Wrap.Header>
        <Wrap.Title>{title || 'No Title'}</Wrap.Title>
        <Button auto='0 0 0 auto'>
          <Wrap.Cta__Plus /> Yaratish
        </Button>
      </Wrap.Header>
      {children}
    </Wrap>
  );
};

export default Content;
