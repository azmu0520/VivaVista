import styled from 'styled-components';

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
