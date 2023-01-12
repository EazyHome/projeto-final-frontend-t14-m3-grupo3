import styled from "styled-components";
import imgDashClient from "./../../../assets/img/dashClient.png";

export const BodyDashborardClient = styled.body`
  margin-top: 85px;
`;

export const DashboardClientConteiner = styled.main`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  /* @media (max-width: 630px) {
    & {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
      justify-content: space-between;
    }
  } */
`;

export const SectionDashboardClientTop = styled.div`
  margin-top: 85px;
  scroll-margin-top: 88px;
  width: 100%;
  height: 225px;
  background: url(${imgDashClient});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  & > div {
    background-color: rgba(255, 102, 0, 0.2);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 700px) {
    height: 450px;

    & > div {
      width: 45%;
      min-height: 100%;
      max-height: 100%;
    }
  }
`;

export const TextSectionTop = styled.h3`
  margin: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  font-weight: 700;
  border: 2px solid var(--color-primary);
  color: var(--color-white);
  @media (min-width: 700px) {
    width: 100%;
    font-size: 45px;
    line-height: 55px;
    text-align: right;
    margin: none;
    padding-top: none;
    padding-bottom: none;
    padding-left: none;
    padding-right: none;
    border: none;
  }
`;

export const DashContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  @media (min-width: 630px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DashNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 2rem;
  /* min-height: 100%;
  border: 2px solid red;
  min-height: 100%;
  max-height: 100%;
  overflow: scroll; */
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
  padding: 12px;
  width: 80%;
  background-color: var(--color-grey0);
  min-height: 100%;
  @media (max-width: 630px) {
    width: 100%;
  }
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

export const ListService = styled.ul`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-row-gap: 24px;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 10px;

  @media (min-width: 400px) {
    & {
      grid-template-columns: 100px 100px 100px;
      grid-row-gap: 12px;
      gap: 12px;
    }
  }
  @media (min-width: 500px) {
    & {
      grid-template-columns: 100px 100px 100px 100px;
    }
  }
  @media (min-width: 760px) {
    & {
      grid-row-gap: 24px;
      gap: 24px;
    }
  }

  @media (min-width: 900px) {
    & {
      grid-template-columns: 100px 100px 100px 100px 100px 100px;
      gap: 28px;
      grid-row-gap: 28px;
    }
  }
`;

export const DivEditProfile = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 16px;
  margin: 0 auto 18px auto;

  img {
    border: 1px solid black;
  }

  #saveChanges {
    width: 100%;
    height: 48px;
    color: var(--color-white);
    background-color: var(--color-opposite-2);
    margin-top: 16px;
    border: 1px solid var(--color-opposite-2);
    border-radius: 4px;
    margin-right: 0;
  }

  @media (min-width: 900px) {
    width: 90%;
    max-width: 90%;
    margin: 0;
    position: relative;

    #saveChanges {
      width: 145px;
      height: 50px;
      margin-right: 80px;
    }

    #form {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-start;
    }
  }
`;

export const DivEditNomeEmail = styled.div`
  .name {
    width: 100%;
  }
`;

export const DivEditProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 18px auto;
  width: 100%;

  @media (min-width: 1020px) {
    img {
      position: absolute;
      right: 120px;
      top: 60px;
      width: 110px;
      height: 120px;
      object-fit: cover;
    }
  }
`;

export const WorkCities = styled.div`
  width: 100%;
  max-width: 420px;
  h4 {
    margin-top: 16px;
  }
  li {
    list-style: disc;
    margin-left: 28px;
    margin-top: 16px;
    font-weight: 600;
  }
`;

export const AddCity = styled.div`
  width: 100%;
  max-width: 420px;

  .stateSelect {
    width: 90px;
  }

  & button {
    width: 180px;
    height: 55px;
    background-color: var(--color-primary);
    color: var(--color-white);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    padding: 0 8px;
    margin-top: 10px;
  }

  @media (min-width: 1000px) {
    width: 100%;
    max-width: 100%;
  }

  & button {
    margin-right: 80px;
  }
`;

export const CoverLabelStateSpan = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StateAndButton = styled.div`
  justify-content: space-between;

  #DivLocal {
    margin: 16px 0;
    width: 100%;
    display: flex;
    gap: 16px;
  }

  @media (min-width: 1000px) {
    display: flex;
    gap: 16px;
    align-items: center;

    max-width: 100%;
  }
`;

export const SelectCity = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .citySelect {
    width: 100%;
  }

  @media (min-width: 1000px) {
    max-width: 860px;
    width: 100%;
  }
`;

export const Categories = styled.div`
  width: 100%;
  max-width: 420px;
  h4 {
    margin-top: 16px;
  }
  li {
    list-style: disc;
    margin-left: 28px;
    margin-top: 16px;
    font-weight: 600;
  }

  button {
    width: 60%;
  }

  @media (min-width: 1000px) {
    max-width: 100%;
  }
`;

export const SelectCategory = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

export const Age = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .age {
    width: 100px;
  }
`;

export const DivPhone = styled.div`
  margin-top: 16px;
`;

export const FormEdit = styled.form`
  .name,
  .email {
    margin-bottom: 16px;
    width: 70%;
  }
`;

export const DivCoverCategory = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    gap: 32px;
    .Category {
      width: 420px;
    }
    & button {
      margin-top: 16px;
      width: 180px;
    }
  }
`;

export const CoverAgePhone = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
