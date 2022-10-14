import styled from 'styled-components';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import { Modal } from 'antd';

export const Grid = styled.div`
  margin: 15px 0;
  position: relative;
  padding-top: ${({ open }) => (open ? '50px' : '0px')};
  transition: all 0.3s ease-in-out;
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
  padding-left: 30px;
`;

Grid.NoData = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 162px;
  }
  h3 {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
    /* margin-left: 50px; */
  }
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
  .action__edit {
    opacity: ${({ edit }) => (edit == true ? '1' : '0')} !important;
    transition: all 0.3s ease-in-out;
  }
`;

export const Icon = styled.div``;

Icon.Delete = styled(Delete)`
  margin-right: 6px;
`;
Icon.Edit = styled(Edit)`
  margin-right: 6px;
`;

export const AntModal = styled(Modal)`
  margin: auto;
  .ant-modal-close {
    display: none;
  }
  .ant-modal-content {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    width: 400px;
    height: 158px;
  }
`;

AntModal.Delete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
`;

AntModal.Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #0b132b;
`;

AntModal.Btn_Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;
