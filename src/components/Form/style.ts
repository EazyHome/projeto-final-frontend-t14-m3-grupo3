import styled from "styled-components";

export const FormConteiner = styled.div`
  width: 90%;
  max-width: 400px;
  /* margin-top: 8vh; */
  background-color: var(--color-white);
  border-radius: 10px;
  padding: 20px 15px;
  /* height: 680px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-top: -40px; */

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  & > button {
    margin-top: 5px;
    width: 100%;
    height: 52px;
    font-size: 18px;
    border-radius: 4px;
    background-color: var(--color-primary);
    opacity: 0.9;
    border: solid transparent;
    color: var(--color-white);

    &:hover {
      opacity: 1;
      border: solid transparent;
    }
  }
`;
