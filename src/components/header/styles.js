import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: #fffc01;
  color: white;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 99;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
  }
`;

export const DivLogo = styled.div`
  width: 100px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 80px;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  color: #0038a8;
  font-size: 14px;
  gap: 15px;
  margin-bottom: 5px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
    gap: 20px;
  }
`;