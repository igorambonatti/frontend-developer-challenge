import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  height: 319px;
  background: #707070 no-repeat padding-box;
  border: 1px solid #707070;
  display: block;
  height: 319px;
  h2 {
    margin-top: 69px;
    width: 227;
    height: 23px;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: initial;
    font-size: 20px;
    color: #ffffff;
  }
  h1 {
    width: 358;
    text-align: center;
    font-family: 'Helvetica Neue';
    font-size: 48px;
    height: 48px;
    color: #ffffff;
    font-weight: bold;
    font-family: sans-serif;
  }
  h3 {
    color: #fff;
    text-align: center;
    font-family: 'Helvetica Neue';
    font-family: sans-serif;
    font-weight: initial;
    height: 16px;
    margin-top: 24px;
    font-size: 17px;
  }
`;

export const NavButtons = styled.div`
  height: 139px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  width: 160px;
  height: 40px;
  margin: 0 20px;
  background: #ffffff no-repeat padding-box;
  box-shadow: 0px 1px 6px #00000029;
  border: 1px solid #707070;
  border-radius: 4px;
  text-align: center;
  color: #888888;
  opacity: 1;
`;
