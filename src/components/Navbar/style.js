import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Notification } from '../../assets/icons/notification.svg';

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Nav = styled.div`
  display: flex;
  /* align-items: ${({ menu }) => (menu ? 'center' : 'flex-star')}; */
  flex-direction: column;
  flex: ${({ menu }) => (menu ? '0' : '1')};
  max-width: 280px;
  height: 100%;
  padding: ${({ menu }) => (menu ? '40px 16px' : '40px 32px')};
  background: ${({ theme }) => (theme == 'light' ? '#fff' : '#1F1D2B')};
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease-in-out;

  @media (max-width: 765px) {
    padding: 25px 16px;
  }
  @media (max-width: 345px) {
  }
`;

Nav.Logo_Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 45px;
  cursor: pointer;
  @media (max-width: 765px) {
    justify-content: center;
  }
`;

Nav.Logo_Text = styled.span`
  margin: 0 15px;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-primary);
  opacity: ${({ menu }) => (menu ? '0' : '1')};
  position: ${({ menu }) => (menu ? 'absolute' : 'static')};
  right: ${({ menu }) => (menu ? '0' : '1')};
  ::before {
    content: 'WebBrain Academy';
  }
  @media (max-width: 765px) {
    display: none;
  }
  transition: all 0.3s ease-in-out;
`;

Nav.Logo = styled(Logo)`
  min-width: 40px;
  max-width: 60px;
  /* width: 133px;
  height: fit-content;
  margin-bottom: 45px;
  cursor: pointer; */
`;

Nav.Links = styled.ul`
  display: flex;
  /* align-items: ${({ menu }) => (menu ? 'center' : 'flex-start')}; */

  flex-direction: column;
  border-bottom: 1px solid #ebeff2;
`;

Nav.Link = styled.li`
  display: flex;
  align-items: center;
  .h3 {
    margin-left: 16px;
  }
  .nav__icon {
    path {
      fill: ${({ active }) =>
        active == 'true' ? 'var(--color-primary)' : '#334D6E'};
      transition: all 0.3s ease-in-out;
    }
  }
  @media (max-width: 765px) {
    justify-content: center;
  }
  margin-bottom: 38px;
`;

Nav.Link_Text = styled.h3`
  margin-left: 16px;
  color: ${({ active }) =>
    active == 'true' ? 'var(--color-primary)' : '#334D6E'};
  opacity: ${({ menu }) => (menu ? '0' : '1')};
  width: ${({ menu }) => (menu ? '0' : 'fit-content')};
  transition: all 0.3s ease-in-out;

  @media (max-width: 765px) {
    display: none;
  }
`;

export const Rest = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4.2;
`;

Rest.Searchbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  background: #ffffff;
  box-shadow: 1px 2px 2px rgba(170, 170, 170, 0.1);
`;

Rest.InputWrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 24px;
  margin-left: 50px;
`;

Rest.SearchIcon = styled(Search)`
  position: absolute;
  left: 0;
`;
Rest.Input = styled.input`
  width: 200px;
  height: 100%;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #0b132b;
  opacity: 0.3;
  padding-left: 40px;
`;

Rest.NavRight = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

Rest.Notify = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 55px;
  height: 55px;
  border: 1px solid #e7e7ea;
  border-radius: 50%;
  position: relative;

  .notifies__number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: #ff1717;
    border-radius: 11px;
    position: absolute;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    top: -2px;
    right: -2px;
  }
`;

Rest.Notification = styled(Notification)`
  width: 24px;
  height: 24px;
`;
Rest.User = styled.img`
  width: 55px;
  height: 55px;
  margin: 0 40px 0 16px;
`;
