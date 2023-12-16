import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0 0px 0;
  height: 100vh;
  column-gap: 2rem;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  flex: 1;
  border: 1px solid #e9e9e9;
  background: #fff;
  height: fit-content;
  .title_wrap {
    padding: 10px;
    font-size: 16px;
    text-align: left;
    display: block;
    letter-spacing: 0.5px;
    line-height: 18px;

    color: #000;
    font-weight: 500;
    background-color: #f7f7f7;
    text-transform: uppercase;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .filter_title {
    font-size: 13px;
    line-height: 17px;
    color: #232323;
    font-weight: 500;
    padding: 15px 0 8px 10px;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    color: #787878;
    padding-left: 10px;
    padding-bottom: 7px;
    input {
      margin-right: 0.8rem;
    }
    label {
      cursor: pointer;
    }
  }
  li:hover {
    color: #fc9823;
  }
  .last_item {
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
`;

export const Body = styled.div`
  /* background-color: blue; */
  flex: 4;

  .header {
    display: flex;
    background-color: #fff;
    margin: 0 0 20px 0;
    padding: 10px 0px;
    border: 1px solid #eee;
    border-radius: 5px;
    h3 {
      font-size: 18px;
      color: #232323;
      font-weight: 500;
      padding: 0 10px;
    }
  }

  .controllers {
    margin-left: auto;
    padding: 0 20px;
  }

  .sort_wrap .span {
    margin-right: 10px;
  }
  /* PRODUCTS */
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;
