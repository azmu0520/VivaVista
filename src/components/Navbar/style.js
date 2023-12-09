import styled, { css } from "styled-components";
// import { ReactComponent as Search } from "../../assets/icons/search.svg";
const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrap = styled.div`
  position: absolute;
  z-index: 10;
  padding: 30px 0 0;
  width: 100%;
  .container {
    ${center}

    justify-content: space-evenly;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
  }
  .image-container {
    max-width: 100%;
    height: auto;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .controllers {
    img {
      width: 32px;
      height: 32px;
      cursor: pointer;
      padding: 7px;
      background: #fff;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 0.4px;
  font-weight: 600;
  a {
    padding: 10px 22px;
    color: inherit;
    :hover {
      color: #fc9823;
      font-size: 23px;
    }
  }
`;
