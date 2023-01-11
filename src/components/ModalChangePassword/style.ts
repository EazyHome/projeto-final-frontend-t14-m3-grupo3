import styled from "styled-components";

export const BackGroudModalPassword = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: var(--color-overlay-black);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalPassword = styled.div`
  width: 100%;
  max-width: 400px;
  height: max-content;
  padding: 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & h3 {
    margin-bottom: 32px;
  }

  & label {
    color: var(--color-secondary);
  }

  & input {
    width: 350px;
    max-width: 100%;
  }

  & #closeButton {
    position: absolute;
    right: 15px;
    top: 15px;
    border: none;
    background-color: transparent;
    font-size: var(--font-size-24);
  }
  & #changePassword {
    background-color: var(--color-secondary);
    color: white;
  }
  & #changePassword:hover {
    background-color: var(--color-primary);
  }
`;
