import styled from "styled-components";
import imgBackgroud from "./../../assets/img/backGroudRegisterPage.jpeg";

export const RegisterConteiner = styled.main`
  width: 100%;
  height: 100vh;
  width: 100%;
  height: 100vh;
  background: url(${imgBackgroud});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const RegisterButtonsCoteiner = styled.div`
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    p {
      text-align: center;
      width: 70%;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      color: var(--color-grey100);
    }
  }
  @media (min-width: 800px) {
    flex-direction: row;
    div {
      max-width: 371px;
      max-height: 301px;
    }
  }
`;
