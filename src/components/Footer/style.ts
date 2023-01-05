import styled from "styled-components";

export const DivFooter = styled.div`
  height: 50px;
  padding: 0 16px 0 16px;
  background-color: var(--color-primary);

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .contactIcons {
    display: flex;
    gap: 8px;
    font-size: 22px;
  }
  & a {
    font-weight: 400;
    text-decoration: underline;
    color: white;
  }

  @media (min-width: 800px) {
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;
