import styled from 'styled-components';
import { Select } from 'antd';

export const AntSelect = styled(Select)`
  width: 100% !important;
  .ant-select-selector {
    display: flex;
    align-items: center;
    height: 40px !important;
    border: 1px solid #e5e5e5 !important;
    border-radius: 5px !important;
    box-shadow: none !important;
  }
  .ant-select-selection-search {
    display: flex;
    align-items: center;
  }
  margin: ${({ margin }) => (margin ? margin : '0')};
`;
