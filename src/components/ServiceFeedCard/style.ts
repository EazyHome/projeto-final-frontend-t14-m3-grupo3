import styled, { css } from "styled-components";

interface iStyledFeedProps {
  colorOfCardFeed?: string;
}

export const FeedItem = styled.div<iStyledFeedProps>`
  width: 50%;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: var(--radius-1);
  padding-bottom: 1rem;

  ${({ colorOfCardFeed }) => {
    if (colorOfCardFeed === "primary") {
      return css`
        border: 1px solid var(--color-primary);
        &:hover {
          background-color: var(--color-primary-20);
        }
      `;
    } else if (colorOfCardFeed === "opposite") {
      return css`
        border: 1px solid var(--color-opposite-1);
        &:hover {
          background-color: var(--color-opposite-1-20);
        }
      `;
    } else if (colorOfCardFeed === "tertiary") {
      return css`
        border: 1px solid var(--color-tertiary);
        &:hover {
          background-color: var(--color-tertiary-20);
        }
      `;
    } else {
      return css`
        border: 1px solid var(--color-negative);
        &:hover {
          background-color: var(--color-negative-20);
        }
      `;
    }
  }}

  & > img {
    width: 4rem;
    height: 4rem;
    border: 1px solid var(--color-grey20);
    margin: 1rem;
    border-radius: var(--radius-1);
  }
`;

export const FeedItemBody = styled.div`
  min-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem 0 0;
  gap: 0.5rem;
`;

export const FeedItemHeader = styled.div<iStyledFeedProps>`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid var(--color-grey20);
  background-color: transparent;
  padding: 1rem 0 0.5rem 0;

  & > span {
    ${({ colorOfCardFeed }) => {
      if (colorOfCardFeed === "primary") {
        return css`
          color: var(--color-primary);
        `;
      } else if (colorOfCardFeed === "opposite") {
        return css`
          color: var(--color-opposite-1);
        `;
      } else if (colorOfCardFeed === "tertiary") {
        return css`
          color: var(--color-tertiary);
        `;
      } else {
        return css`
          color: var(--color-negative);
        `;
      }
    }};
  }
`;

export const FeedItemTitle = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0;
`;
