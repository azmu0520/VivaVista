import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : '121px')};
  height: ${({ height }) => (height ? height : '40px')};
  background: ${({ bg }) => (bg ? bg : '#29A0DC')};
  border-radius: ${({ radius }) => (radius ? radius : '4px')};
  font-weight: 500;
  margin: ${({ auto }) => (auto ? auto : '0px')};
  font-size: 16px;
  line-height: 19px;
  color: ${({ color }) => (color ? color : '#fff')};
  cursor: pointer;
`;
