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

interface iModalHireServiceProps {
  setShowHireServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  image: string;
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
    setShowHireServiceModal(false);
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
