import styled from 'styled-components';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { Modal } from 'antd';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 40px;
`;
Wrap.Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 25px 25px 30px;
`;

Wrap.Title = styled.h1`
  margin: 0 !important;
`;

Wrap.Cta__Plus = styled(Plus)`
  margin-right: 6px;
`;

export const AntModal = styled(Modal)`
  margin: auto;
  .ant-modal-close {
    display: none;
  }
`;
