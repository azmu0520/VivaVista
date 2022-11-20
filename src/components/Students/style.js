import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

export const Wrap = styled.div``;

Wrap.Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
  border-bottom: 1px solid #e7e7ea;
  padding: 0 25px;
`;

Wrap.Title = styled.h1``;

Wrap.Cta__Plus = styled(Plus)`
  margin-right: 6px;
`;

Wrap.Actions = styled.div`
  display: flex;
  width: 100%;
  height: 66px;
  background: white;
`;

export const Grid = styled.div`
  margin: 15px 0;
`;
Grid.Data = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #0b132b;
  min-width: fit-content;
  opacity: ${({ opacity }) => (opacity == 'true' ? '1' : '0.5')};
  label,
  input {
    cursor: pointer;
  }
`;
Grid.Row = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr 1fr;
  height: 55px;
  align-items: center;
  .row__input:checked ~ ${Grid.Data} {
    color: #29a0dc;

    opacity: 1;
  }

  padding-left: 30px;
`;
