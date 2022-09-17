import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Nav = styled.div`
  display: flex;
  align-items: ${({ menu }) => (menu ? 'center' : 'flex-star')};
  flex-direction: column;
  flex: ${({ menu }) => (menu ? '0' : '1')};
  width: 100%;
  height: 100%;
  padding: 40px 32px;
  background: #ffffff;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease-in-out;

  @media (max-width: 1400px) {
  }
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
  display: ${({ menu }) => (menu ? 'none' : 'block')};
  @media (max-width: 765px) {
    display: none;
  }
  transition: all 0.3s ease-in-out;
`;

Nav.Logo = styled(Logo)`
  width: 40px;
  /* width: 133px;
  height: fit-content;
  margin-bottom: 45px;
  cursor: pointer; */
`;

Nav.Links = styled.ul`
  display: flex;
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
  transition: all 0.3s ease-in-out;
  display: ${({ menu }) => (menu ? 'none' : 'block')};
  transition: all 0.3s ease-in-out;

  @media (max-width: 765px) {
    display: none;
  }
`;

export const Rest = styled.div`
  display: flex;
  flex: 4.2;
`;
