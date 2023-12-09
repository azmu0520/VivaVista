import styled, { css } from "styled-components";
import main1 from "../../assets/images/main-1.jpg";
import main2 from "../../assets/images/main-2.jpg";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrap = styled.div`
  .carousel_wrap {
    height: 80vh;
  }
  .sliders {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .sliders:nth-child(1) {
    background: url(${main1});
  }
  .sliders:nth-child(2) {
    background: url(${main2});
  }
  .text_wrap {
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 75%;
    h3 {
      font-size: 20px;
      text-transform: capitalize;
      color: #6c6c6c;
      font-weight: 300;
    }
    h2 {
      font-size: 50px;
      text-transform: capitalize;
      color: #fc9823;
      font-weight: 500;
      margin-bottom: 10px;
      margin-top: 0;
    }
    p {
      font-size: 15px;
      color: #777;
      margin: 0;
      text-transform: capitalize;
      line-height: 24px;
      text-align: start;
      width: 50%;
    }
    div {
      margin-top: 50px;
      text-transform: uppercase;
      border-radius: 5px;
      padding: 12px 36px;
      background-color: #fc9823;
      color: #fff;
      text-transform: uppercase;
      transition: 0.3s ease;
      font-size: 14px;
    }
  }
`;

export const Container = styled.div``;
