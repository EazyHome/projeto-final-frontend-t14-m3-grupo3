import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormConteiner } from "../Form/style";
import { BackGroundForm } from "../BackgroundModal/style";
import {
  CloseButtons,
  CloseModalDiv,
  FirstLine,
  ItemBody,
  ItemImage,
  LeftColumn,
  ModalContainer,
  ModalDiv,
  RatingDiv,
  RightColumn,
  SecondLine,
  StatusDiv,
} from "./style";
import TextField from "@mui/material/TextField";
import { Button } from "../Button/Button";
import { useState } from "react";

import { StarRating } from "../StarRating/StarRating";

import { iServices } from "../../contexts/ProfileContext/ProfileContext";

interface iModalHireServiceProps {
  setShowCloseOrCancelServiceModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  id: number | undefined;
  image: string;
  name: string;
  category: string;
  phone: string;
  email: string;
  date: string;
  description: string;
  status: string;
}

export interface iUserDescription {
  description: string;
}

export const ModalCloseService = ({
  setShowCloseOrCancelServiceModal,
  id, //id do serviço
  image,
  name,
  category,
  phone,
  email,
  date,
  description,
  status,
}: iModalHireServiceProps) => {
  const [showRatingStars, setShowRatingStars] = useState(false);
  const [rating, setRating] = useState(0);

  const idProvider = id;
  const idClient = localStorage.getItem("@Id:EazyHome");

  const handleCloseService = () => {
    setShowRatingStars(true);
  };

  const handleCancelService = () => {};

  //id do serviço e o rating
  const handleRatingAndCloseService = () => {
    console.log(rating);
    //closeService(id, rating)
  };

  const closeModal = () => {
    setShowCloseOrCancelServiceModal(false);
  };

  return (
    <BackGroundForm>
      <ModalContainer>
        <CloseModalDiv>
          <Button type="button" text="X" callback={closeModal} />
        </CloseModalDiv>
        <ModalDiv>
          <ItemImage>
            <img src={image} alt="foto" />
          </ItemImage>
          <ItemBody>
            <span>{category}</span>
            <span>{`Profissional: ${name}`}</span>
            <span>{`Telefone: ${phone}`}</span>
            <span>{`E-mail: ${email}`}</span>
          </ItemBody>
        </ModalDiv>
        <StatusDiv>
          <FirstLine>
            <span>{status}</span>
            <span>{`Data:${date}`}</span>
          </FirstLine>
          <SecondLine>
            <span>{description}</span>
          </SecondLine>
        </StatusDiv>
        {!showRatingStars ? (
          <CloseButtons>
            <Button
              type="button"
              text="Cancelar"
              callback={handleCancelService}
            />
            <Button
              type="button"
              text="Concluir"
              callback={handleCloseService}
            />
          </CloseButtons>
        ) : (
          <RatingDiv>
            <LeftColumn>
              <span>Avalie o atendimento: </span>
              <StarRating rating={rating} setRating={setRating} />
            </LeftColumn>
            <RightColumn>
              <Button
                type="button"
                text="Enviar"
                callback={handleRatingAndCloseService}
              />
            </RightColumn>
          </RatingDiv>
        )}
      </ModalContainer>
    </BackGroundForm>
  );
};
