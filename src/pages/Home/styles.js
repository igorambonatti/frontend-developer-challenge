import styled from 'styled-components';

export const Container = styled.div``;
export const ProductsSection = styled.div`
  h2 {
    text-align: center;
    margin: 49px;
    color: #888888;
    font-family: 'Helvetica Neue';
    font-size: 18px;
    height: 22px;
  }
`;
export const ProductsList = styled.div`
  margin: auto;
  width: 931px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin-left: 20px;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    height: 350px;
    width: 200px;
    margin: 0 0 39px;
    img {
      align-self: center;

      border: 1px solid #707070;
      width: 100%;
      height: 150px;
    }
  }
  strong {
    text-decoration: none;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: initial;
    font-size: 14px;
    color: #888888;

    margin-top: 14px;
    height: 16px;
  }
  p {
    font-family: 'Helvetica Neue', sans-serif;
    color: #888888;
    font-size: 12px;
    margin-top: 10px;
    height: 60px;
  }
  h4 {
    font-size: 12px;
    color: #888888;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: initial;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Helvetica Neue', sans-serif;
    color: #888888;
    margin-top: 6px;
  }
  h5 {
    font-size: 12px;
    color: #888888;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: initial;
    margin-top: 7px;
  }
`;
export const BuyButton = styled.button`
  height: 30px;
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #707070;
  font-family: 'Helvetica Neue', sans-serif;
  color: #707070;
  margin-top: 16px;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;
export const SeekButton = styled.button`
  display: block;
  margin: auto;
  height: 30px;
  width: 260px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #707070;
  font-family: 'Helvetica Neue', sans-serif;
  color: #707070;
  margin-top: 16px;
  font-size: 16px;
`;

export const Footer = styled.div`
  background: #707070;
  margin-top: 142.36px;
  padding-top: 64px;
  height: 186px;
  div {
    height: 50px;

    span {
      margin: 0 0 3px 0;
      color: #ffffff;
      font-family: 'Helvetica Neue', sans-serif;
      font-weight: initial;
      font-size: 12px;
      display: block;
      text-align: center;
    }
  }
`;
