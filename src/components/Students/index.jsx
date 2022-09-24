import React from 'react';
import { useState } from 'react';
import Button from '../Generic/Button';
import { Grid, Wrap } from './style';

const Students = () => {
  const [checked, setChecked] = useState(false);
  const tableHeader = [
    'Full Name',
    'Phone Number',
    'Groups',
    'Group Time',
    'Id',
  ];
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
  return (
    <Wrap>
      <Wrap.Header>
        <Wrap.Title>O'quvchilar</Wrap.Title>
        <Button auto='0 0 0 auto'>
          <Wrap.Cta__Plus /> Yaratish
        </Button>
      </Wrap.Header>
      <Grid>
        <Grid.Row style={{ background: '#ededed' }}>
          <input type='checkbox' onClick={() => setChecked(!checked)} />
          {tableHeader.map((item, index) => (
            <Grid.Data key={index}>{item}</Grid.Data>
          ))}
        </Grid.Row>
        {students.map((item) => (
          <Grid.Row className='grid__row'>
            <input
              type='checkbox'
              name={item.id}
              id={item.id}
              className='row__input'
              checked={checked}
            />

            <Grid.Data opacity={true}>
              <label htmlFor={item.id}>{item.full_name}</label>
            </Grid.Data>
            <Grid.Data opacity={true}>
              <label htmlFor={item.id}>{item.number}</label>
            </Grid.Data>
            <Grid.Data opacity={true}>
              <label htmlFor={item.id}>{item.group}</label>
            </Grid.Data>
            <Grid.Data opacity={true}>
              <label htmlFor={item.id}>{item.time}</label>
            </Grid.Data>
            <Grid.Data opacity={true}>
              <label htmlFor={item.id}>{item.group_name}</label>
            </Grid.Data>
          </Grid.Row>
        ))}
      </Grid>
    </Wrap>
  );
};

export default Students;
