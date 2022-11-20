import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Generic/Button';
import Content from '../Generic/Content';
import Table from '../Generic/Table';
import { Grid, Wrap } from './style';

let students = [
  {
    id: 1,
    full_name: 'Navruz Nabiyev',
    number: '+9989 99 784 95 72',
    group: 'Rus tili',
    time: 'Odd [13:00 ~ 15:00]',
    group_name: 'g1',
  },
  {
    id: 2,
    full_name: 'Navruz Nabiyev',
    number: '+9989 99 784 95 72',
    group: 'Rus tili',
    time: 'Even [13:00 ~ 15:00]',
    group_name: 'g1',
  },
  {
    id: 3,
    full_name: 'Navruz Nabiyev',
    number: '+9989 99 784 95 72',
    group: 'Rus tili',
    time: 'Odd [13:00 ~ 15:00]',
    group_name: 'g1',
  },
  {
    id: 4,
    full_name: 'Navruz Nabiyev',
    number: '+9989 99 784 95 72',
    group: 'Rus tili',
    time: 'Odd [13:00 ~ 15:00]',
    group_name: 'g1',
  },
];

const Students = () => {
  const initialState = students.reduce(
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
  const tableHeader = [
    'Full Name',
    'Phone Number',
    'Groups',
    'Group Time',
    'Id',
  ];

  return (
    <Wrap>
      <Content title={"O'quvchilar"} type='student'>
        <Table data={students} header={tableHeader} type='student' />
      </Content>
      {/* <Wrap.Header>
        <Wrap.Title>O'quvchilar</Wrap.Title>
        <Button auto='0 0 0 auto'>
          <Wrap.Cta__Plus /> Yaratish
        </Button>
      </Wrap.Header>
      <Grid>
        <Grid.Row style={{ background: '#ededed' }}>
          <input
            type='checkbox'
            onChange={(event) => selectAll(event.target.checked)}
            checked={checkedAll}
          />
          {tableHeader.map((item, index) => (
            <Grid.Data opacity='true' key={index}>
              {item}
            </Grid.Data>
          ))}
        </Grid.Row>
        {students.map((item) => (
          <Grid.Row key={item.id} className='grid__row'>
            <input
              type='checkbox'
              name={item.id}
              id={item.id}
              className='row__input'
              onChange={() => toggleCheck(`check${item.id}`)}
              checked={checked[`check${item.id}`]}
            />

            <Grid.Data>
              <label htmlFor={item.id}>{item.full_name}</label>
            </Grid.Data>
            <Grid.Data>
              <label htmlFor={item.id}>{item.number}</label>
            </Grid.Data>
            <Grid.Data>
              <label htmlFor={item.id}>{item.group}</label>
            </Grid.Data>
            <Grid.Data>
              <label htmlFor={item.id}>{item.time}</label>
            </Grid.Data>
            <Grid.Data>
              <label htmlFor={item.id}>{item.group_name}</label>
            </Grid.Data>
          </Grid.Row>
        ))}
      </Grid> */}
    </Wrap>
  );
};

export default Students;
