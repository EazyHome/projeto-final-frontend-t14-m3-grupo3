import styled from "styled-components";
import imagemHome from "../../assets/img/imagemhome.jpg";

export const BodyHome = styled.div`
  margin: auto;
  margin-bottom: 50px;

  .divImg {
    height: 200px;
    background-image: url(${imagemHome});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .intro {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }

    .introButtons {
      display: flex;
      gap: 16px;
      width: 200px;
    }

    .introButtons button {
      margin-top: 16px;
      width: max-content;
      padding: 0 6px 0 6px;
      height: 24px;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      border-radius: 4px;
      color: var(--color-white);
    }

    h1 {
      font-size: var(--font-size-16);
      width: 200px;
      line-height: 150%;
      color: var(--color-white);
    }
  }

  @media (min-width: 550px) {
    .intro h1 {
      font-size: 24px;
      width: 300px;
      line-height: 150%;
    }

    .introButtons {
      min-width: 300px;
    }
  }

  @media (min-width: 900px) {
    .introButtons {
      display: flex;
      gap: 128px;
      min-width: 600px;
    }

    .introButtons button {
      min-width: 150px;
      min-height: 38px;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      border-radius: 4px;
    }

    .divImg {
      height: 600px;
    }

    .intro h1 {
      font-size: 48px;
      width: 600px;
      line-height: 150%;
    }
  }
`;

export const DivAboutUs = styled.div`
  margin: 25px 25px 0 0;
  width: 100%;
  padding: 0 16px 0 16px;

  h3 {
    margin-bottom: 15px;
  }
  p {
    line-height: 125%;
    text-align: justify;
  }

  @media (min-width: 800px) {
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;

export const Services = styled.div`
  margin: 25px 25px 0 0;
  background-color: var(--color-grey0);
  padding: 12px;
  width: 100%;

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

  @media (min-width: 500px) {
    .servicesCards {
      grid-template-columns: 100px 100px 100px 100px;
    }
  }

  @media (min-width: 630px) {
    .servicesCards {
      grid-template-columns: 100px 100px 100px 100px 100px;
    }
  }
  @media (min-width: 760px) {
    .servicesCards {
      grid-template-columns: 100px 100px 100px 100px 100px 100px;
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
