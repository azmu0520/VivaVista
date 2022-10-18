import React, { useState } from 'react';
import { Wrap, Icon } from './style';

const Students = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const handleMode = (themee) => {
    setTheme(themee);
  };
  localStorage.setItem('theme', theme);
  console.log(localStorage.theme);
  return (
    <Wrap>
      <Wrap.Header>Sozlamalar</Wrap.Header>
      <Wrap.Cards>
        <Wrap.Card>
          <Wrap.CardHead>
            <Icon.Home /> Effect
          </Wrap.CardHead>
          <Wrap.Item onClick={() => handleMode('light')}>
            <Icon.Light /> Kunduzgi
          </Wrap.Item>
          <Wrap.Item onClick={() => handleMode('dark')}>
            <Icon.Dark /> Tungi
          </Wrap.Item>
        </Wrap.Card>
        <Wrap.Card>Lidlar</Wrap.Card>
        <Wrap.Card>Menyu </Wrap.Card>
        <Wrap.Card>To'lov</Wrap.Card>
      </Wrap.Cards>
    </Wrap>
  );
};

export default Students;
