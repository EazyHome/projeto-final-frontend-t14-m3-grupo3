import styled from "styled-components";
import imgDashClient from "./../../../assets/img/dashClient.png";

export const BodyDashborardClient = styled.body`
  margin-top: 85px;
`;

export const DashboardClientConteiner = styled.main`
  width: 100%;
  height: 100vh;
`;

export const SectionDashboardClientTop = styled.div`
  width: 100%;
  height: 225px;
  background: url(${imgDashClient});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: top;
  @media (min-width: 630px) {
    height: 570px;
  }
`;

export const TextSectionTop = styled.h3`
  margin-right: 1rem;
  margin-top: 1rem;
  width: 50%;
  font-size: 16px;
  line-height: 25px;

  text-align: right;
  font-weight: 700;
  color: var(--color-grey0);
  @media (min-width: 630px) {
    width: 40%;
    margin-right: 3rem;
    margin-top: 3rem;
    font-size: 45px;
    line-height: 55px;
  }
`;

export const DashContent = styled.div`
  display: flex;
  flex-direction: column;
  /* @media (min-width: 280px) {
    & > nav {
      width: 100%;
      background-color: var(--color-grey20);
    }
  } */
  @media (min-width: 630px) {
    flex-direction: row;
    justify-content: space-between;
    /* & > nav {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 30%;
    } */
  }
`;

export const DashNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 2rem;
  @media (min-width: 280px) {
    padding: 1rem;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;
    gap: 0.25rem;
    & > ul {
      width: 100%;
    }
    & .NavSubItem {
      text-align: right;
    }
  }
  @media (min-width: 500px) {
    & > nav {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
      gap: 0.25rem;
    }
  }
  @media (min-width: 630px) {
    flex-direction: column;
    justify-content: start;
    width: 30%;
    & > nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const DashMenuItem = styled.li`
  margin-bottom: 1.5rem;
  font-size: 24px;
  @media (min-width: 280px) {
    font-size: 10px;
  }
`;

export const Services = styled.div`
  margin: 25px 25px 0 0;
  background-color: var(--color-grey0);
  padding: 12px;
  width: 80%;

  .servicesCards {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-row-gap: 32px;
    gap: 32px;
    flex-wrap: wrap;
  }

  .orangeCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-primary);
    min-width: 80px;
    max-width: 80px;
    height: 135px;
    border-radius: 40px;
    margin-top: 16px;
    margin-bottom: 15px;
  }

  .greenCard {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    background-color: var(--color-opposite-2);
    min-width: 80px;
    max-width: 80px;
    height: 135px;
    border-radius: 40px;
    margin-top: 16px;
  }

  .orangeCircle {
    width: 100%;
    height: 60%;
    background-color: var(--color-grey20);
    border-radius: 50%;
    border: 3px solid var(--color-grey20);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orangeCircle img {
    width: 75%;
    height: 75%;
    border-radius: 50%;
  }

  .greenCircle {
    width: 100%;
    height: 60%;
    background-color: var(--color-grey20);
    border-radius: 50%;
    border: 3px solid var(--color-grey20);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .greenCircle img {
    width: 75%;
    height: 75%;
    object-fit: cover;
    border-radius: 50%;
  }

  .orangeCard p {
    margin-bottom: 22px;
    font-size: 12px;
    text-align: center;
    color: var(--color-white);
  }

  .greenCard p {
    margin-top: 18px;
    margin-bottom: 22px;
    font-size: 12px;
    text-align: center;
    color: var(--color-white);
  }

  @media (min-width: 280px) {
    width: 100%;
    .servicesCards {
      grid-template-columns: 100px 100px;
      justify-content: space-between;
    }
  }

  @media (min-width: 400px) {
    .servicesCards {
      grid-template-columns: 100px 100px 100px;
      justify-content: space-between;
    }
  }

  @media (min-width: 630px) {
    .servicesCards {
      grid-template-columns: 100px 100px 100px;
      justify-content: space-between;
    }
  }
  @media (min-width: 760px) {
    width: 70%;
    .servicesCards {
      grid-template-columns: 100px 100px 100px 100px;
      justify-content: space-between;
    }
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .orangeCard {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--color-primary);
      min-width: 100px;
      max-width: 100px;
      height: 160px;
      border-radius: 55px;
      margin-top: 16px;
      margin-bottom: 15px;
    }

    .greenCard {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      background-color: var(--color-opposite-2);
      min-width: 100px;
      max-width: 100px;
      height: 160px;
      border-radius: 50px;
      margin-top: 16px;
    }

    .orangeCard p {
      margin-bottom: 22px;
      font-size: 14px;
      text-align: center;
      color: var(--color-white);
    }

    .greenCard p {
      margin-top: 18px;
      margin-bottom: 22px;
      font-size: 14px;
      text-align: center;
      color: var(--color-white);
    }
  }
  @media (min-width: 980px) {
    width: 80%;
    .servicesCards {
      grid-template-columns: 100px 100px 100px 100px 100px 100px;
      justify-content: space-between;
    }
  }
`;
