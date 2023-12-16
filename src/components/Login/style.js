import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;
export const Wrap = styled.form`
  max-width: 720px;
  width: 100%;
  margin: auto;
  background: #f5f5f5;
  padding: 30px;
  .top {
    margin-top: 3rem;
  }
`;

export const Header = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: #222;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 12px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  margin: 0 0 29px;
  color: #909090;
  font-size: 13px;
  line-height: 20px;
  margin: 0 auto 29px auto;
  text-align: center;
  width: 60%;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 29px;

  label {
    width: 100px;
    padding: 6px 15px 0 0;
    text-align: right;
    color: #909090;
    font-size: 13px;
    line-height: 20px;
  }
  label::after {
    content: "*";
    color: #e02b27;
    font-size: 1.2rem;
    margin: 0 0 0 5.75px;
  }
  input {
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    background-clip: padding-box;
    border: 1px solid #ddd;
    color: #666;
    height: 32px;
    line-height: 1.66666667;
    padding: 0 9px;
    vertical-align: baseline;
    width: 25rem;
    outline: none;
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    background: #444;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    padding: 7px 20px;
    box-sizing: border-box;
    vertical-align: middle;
    align-items: center;
    width: fit-content;
    border-radius: 5px;
    margin-right: 3rem;
    outline: none;
  }
  div {
    color: #444;
    font-size: 16px;
    line-height: 20px;
    a {
      color: inherit;
    }
  }
  div:hover {
    color: #ff9800;
  }
`;
