import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../Form/style";
import {
  CloseModalDiv,
  HireButton,
  ItemBody,
  ItemImage,
  ModalContainer,
  ModalDiv,
} from "./style";
import TextField from "@mui/material/TextField";
import { Button } from "../Button/Button";
import { BackGroundForm } from "../BackgroundModal/style";
import moment from "moment";
import { iServices } from "../../contexts/ProfileContext/ProfileContext";
import api from "../../service/api";
import { iUserClient } from "../../contexts/UserContext/UserContext";
import { useEffect, useState } from "react";

interface iModalHireServiceProps {
  setShowHireServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number | undefined;
  image: string | undefined;
  name: string;
  category: string;
  phone: string;
  email: string;
}

export interface iUserDescription {
  description: string;
}

export const ModalHireService = ({
  setShowHireServiceModal,
  id,
  image,
  name,
  category,
  phone,
  email,
}: iModalHireServiceProps) => {
  const [userInfos, setUserInfos] = useState<iUserClient | null>(null);

  const getInfos = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.get(
        `users/${localStorage.getItem("@Id:EazyHome")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
      setUserInfos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfos();
  }, []);

  const hireFormSchema = yup.object().shape({
    description: yup
      .string()
      .max(200, "A descrição deve ter no máximo 255 caracteres."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iServices>({
    mode: "onChange",
    resolver: yupResolver(hireFormSchema),
  });

  const idProvider = id;
  const idClient = localStorage.getItem("@Id:EazyHome");

  const onSubmitFuntion: SubmitHandler<iServices> = (data) => {
    if (userInfos !== null) {
      const hireData = {
        userId: idClient,
        providerId: idProvider,
        data,
        type: category,
        serviceCity: userInfos.city,
        serviceState: userInfos.state,
        status: "active",
        createdAt: moment().format("DD/MM/YYYY"),
      };
      console.log(data.description);
      console.log(hireData);
      setShowHireServiceModal(false);
    }
  };

  const closeHireServiceModal = () => {
    setShowHireServiceModal(false);
  };

  return (
    <BackGroundForm>
      <ModalContainer>
        <CloseModalDiv>
          <Button type="button" text="X" callback={closeHireServiceModal} />
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
        <Form onSubmit={handleSubmit(onSubmitFuntion)}>
          <TextField
            label="Descrição do Serviço"
            variant="outlined"
            type="text"
            placeholder="Digite a descrição do serviço"
            {...register("description")}
            helperText={(errors.description as any)?.message}
          />
          <HireButton>
            <Button type="submit" text="Contratar" />
          </HireButton>
        </Form>
      </ModalContainer>
    </BackGroundForm>
  );
};
