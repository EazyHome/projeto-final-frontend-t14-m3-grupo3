import styled from "styled-components";
import imgBackgroud from "./../../assets/img/backGroudRegisterPage.jpeg";

export const LoginBackGround = styled.main`
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
  justify-content: space-between;
`;

export const LoginConteiner = styled.div`
  width: 90%;
  height: 350px;
  max-width: 400px;
  background-color: var(--color-white);
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: 0;

  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
    button {
      background-color: transparent;
      border: solid transparent;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
  }
  @media (min-width: 800px) {
  }
`;
