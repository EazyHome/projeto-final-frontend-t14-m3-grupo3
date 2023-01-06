import styled from "styled-components";

export const FormConteiner = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: var(--color-white);
  border-radius: 10px;
  height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  & > div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > p {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
    & > button {
      background-color: transparent;
      border: solid transparent;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
  }
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  & > input {
    width: 90%;
    min-height: 50px;
    border-radius: 4px;
    border: 2px solid var(--color-grey20);
    background-color: var(--color-grey0);

    &::placeholder {
      font-size: 12px;
      color: var(--color-black);
      font-weight: 600;
      padding: 6px;
    }
  }
  & > button {
    width: 90%;
    height: 50px;
    border-radius: 4px;
    background-color: var(--color-grey20);
    border: solid transparent;

    &:hover {
      transition: 0.5s;
      background-color: var(--color-primary);
      color: var(--color-white);
      border: solid transparent;
    }
  }
`;
