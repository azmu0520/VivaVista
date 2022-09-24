import React from 'react';
import { Wrap } from './style';

const Button = ({ children, width, height, background, auto }) => {
  return (
    <Wrap width={width} height={height} background={background} auto={auto}>
      {children}
    </Wrap>
  );
};

export default Button;
