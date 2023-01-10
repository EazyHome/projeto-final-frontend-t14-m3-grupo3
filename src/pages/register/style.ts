import styled from "styled-components";
import imgBackgroud from "./../../assets/img/backGroudRegisterPage.jpeg";

export const RegisterConteiner = styled.main`
  max-width: 100vw;
  margin-top: 100px;
  /* max-height: 100vh; */
  min-height: 84vh;
  background: url(${imgBackgroud});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    margin-top: 100px;
    min-height: 80vh;
  }
`;

export const RegisterButtonsCoteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  gap: 35px;
  padding-top: 10px;
  padding-bottom: 15px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 400px;
    padding: 20px;
    height: 300px;
    background-color: var(--colo-white-opacity50);
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
