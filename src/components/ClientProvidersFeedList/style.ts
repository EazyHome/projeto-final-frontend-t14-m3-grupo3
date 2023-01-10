import styled from "styled-components";

export const ProviderList = styled.ul`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  overflow-y: scroll;
`;

export const NoItemsFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
