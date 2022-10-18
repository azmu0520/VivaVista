import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Light } from '../../assets/icons/light.svg';
import { ReactComponent as Dark } from '../../assets/icons/moon.svg';

export const Wrap = styled.div`
  /* width: 100%; */
  flex-direction: column;
  /* background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px; */
  margin: 40px;
  color: ${(id) => {
    console.log(id, 'id');
  }};
`;
Wrap.Header = styled.div`
  display: flex;
  width: inherit;
  align-items: center;
  padding-left: 30px;
  height: 94px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #334d6e;
  margin-bottom: 30px;
`;
// export const Container = styled.div``;

Wrap.Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
Wrap.Card = styled.div`
  width: 257px;
  height: 176px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 24px;
`;

Wrap.CardHead = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #334d6e;
`;

Wrap.Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #334d6e;
  cursor: pointer;
`;
export const Icon = styled.div``;

Icon.Home = styled(Home)`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

Icon.Light = styled(Light)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
Icon.Dark = styled(Dark)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
