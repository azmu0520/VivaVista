import React, { useEffect, useState } from 'react';
import Button from '../Button';
import { Grid, Icon, AntModal } from './style';
import nodata from '../../../assets/images/noData.png';

const Table = ({ data, header }) => {
  const initialState = data.reduce(
    (o, key) => ({ ...o, [`check${key.id}`]: false }),
    {}
  );
  const [deleteItem, setDeleteItem] = useState(false);
  const [edit, setEdit] = useState(true);
  const [checkedAll, setCheckedAll] = useState(false);
  const [modal, setModal] = useState('');
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
    let valueList = Object.values(checked);
    valueList = valueList.filter((item) => item == true);
    if (valueList.length == 1) {
      setDeleteItem(true);
      setEdit(true);
    } else if (valueList.length >= 2) {
      setDeleteItem(true);
      setEdit(false);
    } else if (valueList.length == 0) {
      setDeleteItem(false);
      setEdit(false);
    }
  }, [checked]);

  const handleDelete = (type) => {
    setModal(type);
    console.log(type);
  };
  const handleCancel = () => {
    setModal('');
  };
  return (
    <>
      {data.length == 0 ? (
        <Grid.NoData>
          <img src={nodata} alt='Nodata' />
          <h3>Ma'lumot yo'q</h3>
        </Grid.NoData>
      ) : (
        <Grid open={deleteItem}>
          <AntModal
            centered
            open={modal == 'delete'}
            footer={false}
            onCancel={handleCancel}
          >
            <AntModal.Delete>
              <AntModal.Title>
                Haqiqatda ham ochirishini hohlaysizmi?
              </AntModal.Title>
              <AntModal.Btn_Wrap>
                <Button color='#FF1717' bg='#FDE6E6' radius='5px'>
                  O'chirish
                </Button>
                <Button bg='#f6f6f6' color='#3a4054' radius='5px'>
                  Bekor qilish
                </Button>
              </AntModal.Btn_Wrap>
            </AntModal.Delete>
          </AntModal>
          <Grid.Header edit={edit} className='header__action'>
            <Grid.Row_Btn onClick={() => handleDelete('delete')}>
              <Icon.Delete /> O'chirish
            </Grid.Row_Btn>
            <Grid.Row_Btn className='action__edit'>
              <Icon.Edit /> Tahrirlash
            </Grid.Row_Btn>
          </Grid.Header>
          <Grid.Row className='table__header' style={{ background: '#ededed' }}>
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
      )}
    </>
  );
};

export default Table;
