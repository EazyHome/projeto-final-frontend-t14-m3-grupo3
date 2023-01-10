import styled from "styled-components";

export const SelectConteiner = styled.div`
  min-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  & > div {
    display: flex;
    flex-direction: column;
    min-width: 50%;
    gap: 5px;
    & > span {
      height: 15px;
      font-size: 12px;
      font-weight: 600;
      line-height: 22px;
    }
    & > select {
      border: 2px solid var(--color-grey20);
      background-color: var(--color-grey0);
      min-height: 35px;
      border-radius: 6px;
    }
    .stateSelect {
      width: 100%;
    }
    .citySelect {
      width: 100%;
    }
  }
`;
