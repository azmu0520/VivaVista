import React, { useState } from 'react';
import Button from '../Button';
import { Wrap, AntModal, AddModal } from './style';
import Select from '../Select';
const Content = ({ title, children, type }) => {
  const [addModal, setAddModal] = useState(false);
  let length = [
    { value: '1', label: '3 oy' },
    { value: '2', label: '6 oy' },
    { value: '3', label: '9 oy' },
  ];
  let name = [
    { value: '1', label: 'Matem' },
    { value: '2', label: 'Jis-tar' },
    { value: '3', label: 'Oqish' },
  ];

  const handleCancel = () => {
    console.log('ad');
    setAddModal(false);
  };
  const handleOk = () => {
    setAddModal(false);
  };
  console.log(type);
  return (
    <Wrap>
      <AddModal
        open={addModal == 'kurs'}
        maskStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(2px)',
        }}
        footer={false}
        closable={false}
      >
        <AddModal.Title>Yangi kurs qo'shish </AddModal.Title>
        <AddModal.Label>Nomi </AddModal.Label>
        <Select margin='0 0 24px 0' data={name} />
        <AddModal.Label>Narxi </AddModal.Label>
        <AddModal.Input placeholder='uzbek sumda kiriting' />
        <AddModal.Label>Kurs davomiyligi </AddModal.Label>
        <Select margin='0 0 24px 0' data={length} />
        <AddModal.Label>Kurs davomiyligi </AddModal.Label>
        <Select data={length} />
        <AddModal.Wrap>
          <input type='radio' name='daynight' id='day' />
          <label htmlFor='day'>day</label>
          <input type='radio' name='daynight' id='night' />
          <label htmlFor='night'>night </label>
        </AddModal.Wrap>
        <AntModal.SubmitWrap>
          <Button height='36px' radius={'6px'} width='45%' onClick={handleOk}>
            Saqlash
          </Button>
          <Button
            height='36px'
            color='#0B132B'
            bg='#EDEDED'
            radius={'6px'}
            width='45%'
            onClick={handleCancel}
          >
            Bekor qilish
          </Button>
        </AntModal.SubmitWrap>
      </AddModal>

      <AddModal
        open={addModal == 'hodim'}
        maskStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(2px)',
        }}
        footer={false}
        closable={false}
      >
        <AddModal.Form>
          <AddModal.Title>Yangi xodim qo'shish</AddModal.Title>
          <AddModal.Label>F.I.O </AddModal.Label>
          <AddModal.Input placeholder='Enter your full-name' />
          <AddModal.Label>Telefon raqam </AddModal.Label>
          <AddModal.Input type='number' placeholder='Enter your phone number' />
          <AddModal.Label>Email </AddModal.Label>
          <AddModal.Input type='email' placeholder='Enter your email' />
          <AddModal.Label>Parol </AddModal.Label>
          <AddModal.Input placeholder='Enter your password' />
          <AddModal.Label>Lavozimi </AddModal.Label>
          <Select data={length} />
          <AntModal.SubmitWrap>
            <Button height='36px' radius={'6px'} width='45%' onClick={handleOk}>
              Saqlash
            </Button>
            <Button
              height='36px'
              color='#0B132B'
              bg='#EDEDED'
              radius={'6px'}
              width='45%'
              onClick={handleCancel}
            >
              Bekor qilish
            </Button>
          </AntModal.SubmitWrap>
        </AddModal.Form>
      </AddModal>
      <AddModal
        open={addModal == 'xona'}
        maskStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(2px)',
        }}
        footer={false}
        closable={false}
      >
        <AddModal.Form>
          <AddModal.Title>Yangi xona qo'shish</AddModal.Title>
          <AddModal.Label>Xona nomi </AddModal.Label>
          <AddModal.Input placeholder='Enter your full-name' />
          <AntModal.SubmitWrap type={type}>
            <Button height='36px' radius={'6px'} width='45%' onClick={handleOk}>
              Saqlash
            </Button>
            <Button
              height='36px'
              color='#0B132B'
              bg='#EDEDED'
              radius={'6px'}
              width='45%'
              onClick={handleCancel}
            >
              Bekor qilish
            </Button>
          </AntModal.SubmitWrap>
        </AddModal.Form>
      </AddModal>

      <Wrap.Header>
        <Wrap.Title>{title || 'No Title'}</Wrap.Title>
        <Button auto='0 0 0 auto' onClick={() => setAddModal(type)}>
          <Wrap.Cta__Plus /> Yaratish
        </Button>
      </Wrap.Header>
      {children}
    </Wrap>
  );
};

export default Content;
