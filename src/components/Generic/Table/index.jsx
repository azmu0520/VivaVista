import React, { useEffect, useState } from 'react';
import { Wrap, Grid } from './style';

const Table = ({ data, header }) => {
  const initialState = data.reduce(
    (o, key) => ({ ...o, [`check${key.id}`]: false }),
    {}
  );
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(initialState);
  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };
  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };
  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  return (
    <Grid>
      <Grid.Row style={{ background: '#ededed' }}>
        <input
          type='checkbox'
          onChange={(event) => selectAll(event.target.checked)}
          checked={checkedAll}
        />
        {header?.map((item, index) => (
          <Grid.Data opacity='true' key={index}>
            {item}
          </Grid.Data>
        ))}
      </Grid.Row>
      {data?.map((item) => {
        let element = Object.keys(item);
        element.shift();
        return (
          <Grid.Row key={item.id} className='grid__row'>
            <input
              type='checkbox'
              name={item.id}
              id={item.id}
              className='row__input'
              onChange={() => toggleCheck(`check${item.id}`)}
              checked={checked[`check${item.id}`]}
            />
            {element.map((value) => {
              return (
                <Grid.Data key={`${value}-${item.id}`}>
                  <label htmlFor={item.id}>{item[value]}</label>
                </Grid.Data>
              );
            })}
          </Grid.Row>
        );
      })}
    </Grid>
  );
};

export default Table;
