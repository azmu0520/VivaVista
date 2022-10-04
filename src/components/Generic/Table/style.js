import styled from 'styled-components';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
export const Grid = styled.div`
  margin: 15px 0;
  position: relative;
  padding-top: 50px;
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
  position: relative;
  grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr 1fr;
  height: 55px;
  align-items: center;
  z-index: 10;
  .row__input:checked ~ ${Grid.Data} {
    color: #29a0dc;

    opacity: 1;
  }

  .header__action {
    position: absolute !important;
  }

  padding-left: 30px;
`;

Grid.Row_Btn = styled.div`
  width: 123px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6f7;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #979ba5;
  margin-right: 16px;
  cursor: pointer;
`;

Grid.Header = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 30px;
`;

export const Icon = styled.div``;

Icon.Delete = styled(Delete)`
  margin-right: 6px;
`;
Icon.Edit = styled(Edit)`
  margin-right: 6px;
`;
