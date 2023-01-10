import styled from "styled-components";
import imgBackgroud from "./../../assets/img/backGroudRegisterPage.jpeg";

export const LoginBackGround = styled.main`
  max-width: 100vw;
  margin-top: 85px;
  max-height: 100vh;
  min-height: 75vh;
  background: url(${imgBackgroud});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginConteiner = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: rgba(256, 256, 256, 0.8);
  border-radius: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 25px 15px;

  & > div {
    width: 80%;
    text-align: center;
    color: var(--color-primary);
    p {
      font-size: var(--font-size-20);
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

  @media (min-width: 700px) {
    & > div > p {
      font-size: var(--font-size-24);
    }
  }
`;

export const ErrorMsg = styled.p`
  color: var(--color-primary);
`;
