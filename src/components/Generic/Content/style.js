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
  .ant__select {
    margin-bottom: 24px !important;
  }
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

export const AddModal = styled(Modal)`
  width: 400px !important;
  height: 600px;
  display: flex;
  flex-direction: column;
  .ant-modal-content {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
    border-radius: 12px !important;
    padding: 28px;
  }
  .ant-modal-root .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.05) !important;
    backdrop-filter: blur(2px) !important;
  }
  .ant-modal-body {
    padding: 0 !important;
  }
`;
AddModal.Form = styled.form``;

AddModal.Title = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: #0b132b;
  margin-bottom: 26px;
`;

AddModal.Label = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #0b132b;
  opacity: 0.8;
  ::after {
    content: '*';
    color: red;
    padding-left: 1px;
  }
  margin-bottom: 8px;
`;

AddModal.Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background: transparent;
  padding-left: 18px;
  outline: none;
  margin-bottom: 24px;
`;

AddModal.Sellect = styled.select`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  outline: none;
  height: 40px;
  width: 100%;
  padding-left: 18px;
  position: relative;
`;

AddModal.Wrap = styled.div`
  display: flex;
  margin-top: 24px;
  label {
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  input {
    margin-right: 5px;
    cursor: pointer;
  }
  label {
    margin-right: 15px;
  }
`;

AntModal.SubmitWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ type }) => (type == 'xona' ? '18px' : '28px')};
`;
