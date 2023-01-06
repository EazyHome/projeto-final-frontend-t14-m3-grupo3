import styled from "styled-components";

export const SelectConteiner = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  span {
    height: 15px;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
  }
  select {
    border: 2px solid var(--color-grey20);
    background-color: var(--color-grey0);
    border-radius: 6px;
  }
  & > select {
    width: 100%;
    height: 35px;
  }
  & > div {
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 85px;
    height: 40px;
    gap: 10px;
    & > div {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      & > select {
        height: 35px;
      }
    }
  }
`;
