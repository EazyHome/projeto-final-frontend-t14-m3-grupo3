import {
  FeedCardButton,
  FeedItem,
  FeedItemBody,
  FeedItemHeader,
  FeedItemImage,
  FeedItemTitle,
  FeedRating,
} from "./style";
import { Button } from "../Button/Button";
import { useState } from "react";
import { ModalHireService } from "../ModalHireService/modalHireService";

interface iServiceFeed {
  typeOfCard: string;
  id: number;
  image: string;
  name: string;
  date?: string;
  city?: string;
  state?: string;
  category?: string;
  phone: string;
  email: string;
  age?: number;
  status?: string;
  rating: number;
  description?: string;
}

export const ServiceFeedCard = ({
  typeOfCard,
  id,
  image,
  name,
  date,
  city,
  state,
  category,
  phone,
  email,
  age,
  status,
  rating,
  description,
}: iServiceFeed) => {
  const [showHireServiceModal, setShowHireServiceModal] = useState(false);

  let colorOfCard = "negative";
  if (rating === 99) {
    colorOfCard = "tertiary";
  } else if (rating >= 2.5 && rating <= 5) {
    colorOfCard = "opposite";
  } else if (rating >= 0 && rating < 2.5) {
    colorOfCard = "primary";
  }

  let serviceCategory = "";
  if (category) {
    serviceCategory = category;
  }

  return (
    <>
      <FeedItem colorOfCardFeed={colorOfCard}>
        <FeedItemImage>
          <img src={image} alt="foto" />
        </FeedItemImage>
        <FeedItemBody>
          <FeedItemHeader colorOfCardFeed={colorOfCard}>
            <span>{typeOfCard !== "serviceProvided" ? category : name}</span>
            <FeedRating>
              <span>
                {status === "EM ANDAMENTO" && status}
                {status === "CONCLUÍDO" && `AVALIAÇÃO: ${rating}/5`}
                {status === "CANCELADO" && rating === -1 && "CANCELADO"}
                {!status && `AVALIAÇÃO: ${rating}/5`}
              </span>
            </FeedRating>
          </FeedItemHeader>
          <FeedItemTitle>
            <div>
              {typeOfCard !== "serviceProvided"
                ? `Profissional: ${name}`
                : `Cidade: ${city} - ${state}`}
            </div>
            <div>{typeOfCard !== "providersList" && `Data: ${date}`}</div>
          </FeedItemTitle>
          <div>{`Telefone: ${phone}`}</div>
          <div>{`E-mail: ${email}`}</div>
          <span>
            {typeOfCard === "providersList"
              ? `Idade: ${age}`
              : status !== "CANCELADO" && `Descrição: ${description}`}
          </span>
          <FeedCardButton>
            {typeOfCard === "providersList" && (
              <Button
                text="Contratar"
                callback={() => setShowHireServiceModal(true)}
              />
            )}
          </FeedCardButton>
        </FeedItemBody>
      </FeedItem>
      {showHireServiceModal && (
        <ModalHireService
          setShowHireServiceModal={setShowHireServiceModal}
          id={id}
          image={image}
          name={name}
          category={serviceCategory}
          phone={phone}
          email={email}
        />
      )}
    </>
  );
};
