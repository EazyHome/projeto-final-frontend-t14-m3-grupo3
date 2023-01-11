import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormConteiner } from "../Form/style";
import { BackGroundForm } from "../BackgroundModal/style";
import {
  CloseButtons,
  CloseModalDiv,
  ItemBody,
  ItemImage,
  ModalContainer,
  ModalDiv,
  StatusDiv,
} from "./style";
import TextField from "@mui/material/TextField";
import { Button } from "../Button/Button";
import { useState } from "react";

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
  id,
  image,
  name,
  category,
  phone,
  email,
  date,
  description,
  status,
}: iModalHireServiceProps) => {
  const hireFormSchema = yup.object().shape({
    description: yup
      .string()
      .max(200, "A descrição ter no máximo 255 caracteres."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iUserDescription>({
    mode: "onChange",
    resolver: yupResolver(hireFormSchema),
  });

  const [showRatingStars, setShowRatingStars] = useState(false);

  const idProvider = id;
  const idClient = localStorage.getItem("@Id:EazyHome");

  const onSubmitFuntion: SubmitHandler<iUserDescription> = (data) => {
    const { description } = data;
    const hireData = {
      idClient,
      idProvider,
      description,
    };
    console.log(data.description);
    console.log(hireData);
    setShowCloseOrCancelServiceModal(false);
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
          <div>
            <div>{status}</div>
            <div>{`Data:${date}`}</div>
          </div>
          <div>
            <span>{description}</span>
          </div>
        </StatusDiv>
        {showRatingStars ? (
          <CloseButtons>
            <Button type="submit" text="Cancelar" />
            <Button type="submit" text="Concluir" />
          </CloseButtons>
        ) : (
          <div></div>
        )}
      </ModalContainer>
    </BackGroundForm>
  );
};
