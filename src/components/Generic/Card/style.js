import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  height: fit-content;
  transition: 0.3s ease;
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  margin-bottom: 1px;

  .img_wrap {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
    }

    .hover_items {
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      align-items: center;
      height: 0;
      transition: all 0.3s ease-in-out;

      img {
        width: 100%;
        height: 100%;
        display: none;
        background: #fff;
        padding: 5px;
        border-radius: 50%;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }

  .details {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    text-align: center;
    h4 {
      border-top: 1px solid #eee;
      font-size: 16px;
      margin: 10px 0;
      padding: 10px 0 0 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      text-transform: capitalize;
    }
    h5 {
      color: #000;
      font-size: 16px;
      font-weight: 700;
      transition: 0.3s ease;
      letter-spacing: 0;
      min-height: 21px;
      margin-bottom: 10px;
    }
    h5:hover,
    h4:hover {
      color: #fc9823;
    }
    cursor: pointer;
    .hover_text {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      display: flex;
      background: #fff;
      justify-content: center;
      color: #fc9823;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.4s ease-in-out;
    }
  }

  .stars {
    display: flex;
    align-items: center;
    height: 20px;
    width: fit-content;
    margin: 0 auto;
    img {
      width: 100%;
      max-height: 100%;
      margin-right: 3px;
    }
  }
  :hover {
    .hover_text {
      transform: translate(-50%, -50%);
    }
    .hover_items {
      height: 30px;
      img {
        display: block;
      }
    }
  }
`;
