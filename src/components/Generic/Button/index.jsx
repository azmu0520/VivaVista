import React from 'react';
import { Wrap } from './style';

const Button = ({ children, width, height, bg, auto, color, radius }) => {
  return (
    <Wrap
      width={width}
      height={height}
      bg={bg}
      auto={auto}
      color={color}
      radius={radius}
    >
      {children}
    </Wrap>
  );
};

export default Button;
