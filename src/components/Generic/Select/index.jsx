import React from 'react';
import { AntSelect } from './style';

const Select = ({ data, margin }) => (
  <AntSelect
    margin={margin}
    showSearch
    style={{ width: 200 }}
    placeholder='Search to Select'
    optionFilterProp='children'
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '')
        .toLowerCase()
        .localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={data}
  />
);

export default Select;
