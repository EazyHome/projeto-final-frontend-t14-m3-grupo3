import styled from "styled-components";

export const GreenCard = styled.li`
  min-width: 280px;
  max-width: 350px;
  position: relative;
  color: var(--color-grey100);
  font-size: 18px;

  & > div {
    height: 160px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div > p {
    width: 70%;
    text-align: center;
  }
  & > div > p > span {
    color: var(--color-grey50);
  }

  @media (min-width: 900px) {
    margin-right: 40%;
    max-width: 500px;
  }

  @media (min-width: 1020px) {
    margin-right: 40%;
    max-width: 500px;
  }
`;

export const TopMark = styled.img`
  width: 30px;
  height: 30px;
  @media (min-width: 900px) {
    width: 37px;
    height: 37px;
    margin-left: 50px;
    margin-bottom: -25px;
  }
`;
export const BottomMark = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0px;

  @media (min-width: 900px) {
    width: 37px;
    height: 37px;
    right: 50px;
    bottom: 25px;
  }
`;
