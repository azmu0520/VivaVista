import React, { useState } from 'react';
import Content from '../Generic/Content';
import Table from '../Generic/Table';
import { AntTabs, TabsTabPane, Wrap } from './style';

let students = [
  {
    id: '1students',
    group_id: 'g1',
    course__title: 'Html & Css',
    price: '100$',
    started: '01/03/2022',
    mentor: 'Shaxboz Yaxyayev',
  },
  {
    id: '2students',
    group_id: 'g2',
    course__title: 'JavaScript',
    price: '120$',
    started: '01/04/2022',
    mentor: 'Shaxboz Yaxyayev',
  },
  {
    id: '3students',
    group_id: 'g3',
    course__title: 'Reactjs',
    price: '150$',
    started: '01/05/2022',
    mentor: 'Azizbek Mukhtorov',
  },
  {
    id: '4students',
    group_id: 'g4',
    course__title: 'Nodejs',
    price: '120$',
    started: '01/06/2022',
    mentor: 'Sardorbek Mukhtorov',
  },
];

let members = [
  {
    id: '1members',
    full_name: 'Sardorbek Mukhtorov',
    position: 'SEO',
    phone: '99893 123 4567',
  },
  {
    id: '2members',
    full_name: 'Shaxboz Yaxyayev',
    position: 'Front-End',
    phone: '99893 123 4567',
  },
  {
    id: '3members',
    full_name: 'Azizbek Mukhtorov',
    position: 'Reactjs',
    phone: '99893 123 4567',
  },
];

let rooms = [
  { id: '1rooms', name: 'Room-1', staff: 'Sardor' },
  { id: '2rooms', name: 'Room-2', staff: 'Shaxboz' },
  { id: '3rooms', name: 'Room-3', staff: 'Ali' },
];
const tableHeader = ['ID', 'Kurs nomi', 'Narx', 'Yatatilgan sana', 'Mentor'];
const memberheader = ['FIO', 'Lavozim', 'Telefon raqam'];
const roomheader = ['Hona raqami', 'Masul shaxs'];
const Sections = () => {
  let samp = [0, 'kurs', 'hodim', 'xona'];
  const [type, setType] = useState(samp[1]);
  const handleChange = (data) => {
    setType(samp[data]);
  };
  return (
    <Wrap>
      <Content title="Bo'limlar" type={type}>
        <AntTabs onChange={handleChange}>
          <TabsTabPane key={1} tab={'Kurslar'}>
            <Table data={students} header={tableHeader} />
          </TabsTabPane>
          <TabsTabPane key={2} tab={'Xodimlar'}>
            <Table data={members} header={memberheader} />
          </TabsTabPane>
          <TabsTabPane key={3} tab={'Xonalar'}>
            <Table data={rooms} header={roomheader} />
          </TabsTabPane>
        </AntTabs>
      </Content>
    </Wrap>
  );
};

export default Sections;
