import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 164px;
  display: block;
  justify-content: center;
  text-align: center;
  h3 {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px;
    color: #888888;
    height: 22px;
    font-weight: bold;
  }
  h4 {
    font-family: 'Helvetica Neue', sans-serif;
    margin-top: 44px;
    font-size: 14px;
    color: #888888;
    font-weight: inherit;
  }
  form {
    button {
      display: block;
      margin: auto;
      height: 39px;
      width: 260px;
      border: 1px solid #707070;
      background: #ffffff;
      margin-top: 50px;
      font-size: 16px;
      color: #888888;
      border-radius: 4px;
    }
  }
`;
export const FormContent = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 39px;
  div {
    margin: 0 20px;
    input {
      background: #fff;
      height: 30px;
      width: 340px;
      border: 1px solid #707070;
      font-size: 14px;
      color: #707070;
    }
    span {
      display: block;
      text-align: left;
      font-family: 'Helvetica Neue', sans-serif;
      font-weight: inherit;
      color: #888888;
      height: 14px;
      font-size: 12px;
      margin-bottom: 7px;
    }
  }
`;
