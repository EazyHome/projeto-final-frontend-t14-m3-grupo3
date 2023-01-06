import styled from "styled-components";
import imagemHome from "../../assets/img/imagemhome.jpg";

export const BodyHome = styled.div`
  margin-top: 85px;
`;

export const HeaderHome = styled.div`
  height: 300px;
  background-image: url(${imagemHome});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 700px) {
    & {
      height: 540px;
    }
  }
`;

export const ContentHeader = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  & > div > h1 {
    font-size: var(--font-size-20);
    text-align: center;
    line-height: 150%;
    color: var(--color-white);
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    width: 90%;
  }

  @media (min-width: 700px) {
    & {
      min-width: 50%;
      max-width: 50%;
    }
    & > div > h1 {
      font-size: 38px;
      text-align: left;
    }
  }
`;

export const HeaderBtns = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  font-size: var(--font-size-20);

  & > button {
    width: 120px;
    padding: 0 6px 0 6px;
    height: 35px;
    background-color: var(--color-primary);
    border: 2px transparent;
    color: var(--color-white);
    font-size: var(--font-size-16);
  }

  & > button:hover {
    background-color: transparent;
    border: 2px solid var(--color-white);
  }

  @media (min-width: 700px) {
    & {
      display: flex;
      min-width: 55%;
      max-width: 55%;
      margin-top: 10px;
    }

    & > button {
      min-height: 40px;
      min-width: 110px;
    }
  }
`;

export const DivAboutUs = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  max-width: 1400px;
  justify-content: center;

  @media (min-width: 700px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const DivContentAboutUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 15px;
  margin-top: -25px;

  & > div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  & > div > h3 {
    margin-top: 40px;
    color: var(--color-primary);
    font-size: var(--font-size-28);
  }
  & > div > img {
    display: none;
  }

  @media (min-width: 990px) {
    & > div > img {
      height: 60%;
      width: 60%;
      display: flex;
      background-color: blue;
      max-width: 600px;
      max-height: 600px;
    }
    & {
      flex-direction: row;
      margin-left: -15%;
      margin-top: 0px;
    }
  }
`;

export const DivTextAboutUs = styled.div`
  width: 90%;
  max-width: 650px;
  padding: 20px;
  position: relative;
  background-color: var(--color-white);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 20;

  & > div {
    border: 1px solid var(--color-primary);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: var(--color-grey100);
    font-size: var(--font-size-16);
  }

  @media (min-width: 990px) {
    & {
      position: absolute;
      left: 400px;
      width: 70%;
      max-width: 700px;
      top: 25%;
    }
  }
`;

export const Services = styled.div`
  background-color: var(--color-grey0);
  padding: 12px;
  margin-top: 30px;
`;

export const ContentServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h3 {
    color: var(--color-primary);
    font-size: var(--font-size-28);
  }
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-row-gap: 24px;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 10px;

  @media (min-width: 400px) {
    & {
      grid-template-columns: 100px 100px 100px;
    }
  }
  @media (min-width: 500px) {
    & {
      grid-template-columns: 100px 100px 100px 100px;
    }
  }

  @media (min-width: 630px) {
    & {
      grid-template-columns: 100px 100px 100px 100px 100px;
    }
  }
  @media (min-width: 900px) {
    & {
      grid-template-columns: 100px 100px 100px 100px 100px 100px;
    }
  }
`;

export const BlueItem = styled.li`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  background-color: var(--color-opposite-2);
  width: 100%;
  max-width: 80px;
  height: 135px;
  border-radius: 40px;
  margin-top: 16px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
  }

  &:hover > div {
    transform: scale(1.2);
    transition: 0.3s ease;
  }

  & > div {
    width: 100%;
    height: 60%;
    background-color: var(--color-grey20);
    border-radius: 50%;
    border: 3px solid var(--color-grey20);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > p {
    margin-top: 25px;
    font-size: 12px;
    text-align: center;
    color: var(--color-white);
  }

  & > div > img {
    width: 75%;
    height: 75%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (min-width: 760px) {
    & {
      min-width: 100px;
      max-width: 100px;
      height: 160px;
      border-radius: 55px;
    }

    & > p {
      font-size: 14px;
    }
  }
`;

export const OrangeItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-primary);
  width: 100%;
  max-width: 80px;
  height: 135px;
  border-radius: 40px;
  margin-top: 16px;
  margin-bottom: 15px;
  margin-left: 15px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
  }

  &:hover > div {
    transform: scale(1.2);
    transition: 0.3s ease;
  }

  @media (min-width: 400px) {
    & {
      margin-left: 0px;
    }
  }

  & > div {
    width: 100%;
    height: 60%;
    background-color: var(--color-grey20);
    border-radius: 50%;
    border: 3px solid var(--color-grey20);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div > img {
    width: 75%;
    height: 75%;
    border-radius: 50%;
  }

  & > p {
    margin-bottom: 25px;
    font-size: 12px;
    text-align: center;
    color: var(--color-white);
  }

  @media (min-width: 760px) {
    & {
      min-width: 100px;
      max-width: 100px;
      height: 160px;
      border-radius: 55px;
    }

    & > p {
      font-size: 14px;
    }
  }
`;

export const Coments = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  .comments {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 350px;
    margin: 16px 0 16px 0;
  }

  .commentsgreen {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 350px;
    margin: 16px 0 16px 0;
    align-self: flex-end;
  }

  .comments img,
  .commentsgreen img {
    width: 50px;
  }

  .comments .topLeft,
  .commentsgreen .topLeft {
    position: absolute;
    top: 0;
    left: 0;
  }

  .comments .downRight,
  .commentsgreen .downRight {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .description {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description p {
    width: 70%;
    text-align: center;
  }

  @media (min-width: 930px) {
    & {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
    }

    .comments {
      max-width: 450px;
    }

    .commentsgreen {
      max-width: 450px;
      transform: translateY(-70px);
    }
  }
`;
