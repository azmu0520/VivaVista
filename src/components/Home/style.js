import styled, { css } from "styled-components";
import main1 from "../../assets/images/main-1.jpg";
import main2 from "../../assets/images/main-2.jpg";

const center = css`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
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

export const Collection = styled.div`
  ${center}
  display: flex;
  height: 80vh;
  gap: 2rem;

  .column1 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    img {
      width: 100%;
    }
  }
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Products = styled.div`
  ${center}
  h3 {
    font-size: 35px;
    font-weight: 700;
    color: #000000;
    text-align: center;
    margin: 0 0 40px 0;
  }
  .list {
    display: grid;
    grid-gap: 1.6rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-template-rows: 400px 400px; */
  }
`;

export const News = styled.div`
  ${center}
  h3 {
    text-transform: capitalize;
    position: relative;
    margin: 0 0 40px 0;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 350px;
    grid-gap: 1.5rem;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    img {
      border-radius: 10px;

      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .title {
      position: absolute;
      bottom: 0;
      background-color: #0000009c;
      font-size: 20px;
      text-transform: capitalize;
      line-height: 28px;
      font-weight: 500;
      color: #fff;
      padding: 5px;
      border-radius: 10px;
    }
  }
`;

export const Footer = styled.div`
  background: #f5f5f5;
  margin-top: 60px;
  padding: 7rem;
  .middle_footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;

    .item1 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .images {
      margin: 20px 0;
      img {
        margin-right: 2rem;
      }
    }

    h4 {
      font-weight: 700;
      font-size: 18px;
      text-transform: capitalize;
      color: #000;
      text-align: center;
    }
    p {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      width: 75%;
      margin: 0 auto;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 20px;
      color: #575757;
      text-align: center;
      padding-top: 2rem;
    }
    .links {
      display: flex;
      align-items: center;
      img {
        width: 25px;
      }
    }

    .item2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: 1px solid #e4e4e4;
      border-left: 1px solid #e4e4e4;
    }
  }
`;
