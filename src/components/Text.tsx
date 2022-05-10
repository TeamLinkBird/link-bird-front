import React from 'react';
import { Text as $Text } from 'react-native';
import styled from 'styled-components';

interface TextProps {
  color?: string;
  size?: number;
  children?: string;
}

function Text({ color, size, children }: TextProps) {
  return (
    <Styled.Text color={color} size={size}>
      {children}
    </Styled.Text>
  );
}

export default Text;

const Styled = {
  Text: styled($Text)`
    color: ${({ color }) => (color ? color : 'black')};
    font-size: ${({ size }) => (size ? size : 16)}px;
  `,
};
