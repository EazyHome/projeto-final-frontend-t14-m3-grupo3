import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Form } from "../Form/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BackGroudModalPassword, ModalPassword } from "./style";
import { BackGroundForm } from "../BackgroundModal/style";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";
import api from "../../service/api";

interface IChangePasswordForm {
  novaSenha: string;
  confimarNovaSenha?: string;
}

interface IData {
  novaSenha: string;
  confimarNovaSenha?: string;
}

interface ISTATE {
  modalPassword: boolean;
  setModalPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const changePassword = async (data: IData) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await api.patch(
      `users/${localStorage.getItem("@Id:EazyHome")}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const ModalChangePassword = ({
  modalPassword,
  setModalPassword,
}: ISTATE) => {
  const formSchema = yup.object().shape({
    novaSenha: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de oito caracteres, pelo menos uma letra, um número e um símbolo"
      ),
    confimarNovaSenha: yup
      .string()
      .required("Senha obrigatoria")
      .oneOf([yup.ref("novaSenha")], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePasswordForm>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const { editPassword } = useContext(ProfileContext);

  function ChangePasswordData(data: IData) {
    delete data.confimarNovaSenha;
    changePassword(data);
  }

  return (
    <div>
      {modalPassword ? (
        <BackGroudModalPassword>
          <ModalPassword>
            <h3>Alterar senha</h3>
            <button id="closeButton" onClick={() => setModalPassword(false)}>
              X
            </button>
            <Form onSubmit={handleSubmit(ChangePasswordData)}>
              <TextField
                label="Nova senha"
                variant="outlined"
                type="password"
                placeholder="Digite a nova senha"
                {...register("novaSenha")}
                helperText={(errors.novaSenha as any)?.message}
              />
              <TextField
                label="Confirme a nova senha"
                variant="outlined"
                type="password"
                placeholder="confirme a senha"
                {...register("confimarNovaSenha")}
                helperText={(errors.confimarNovaSenha as any)?.message}
              />
              <button id="changePassword">Alterar senha</button>
            </Form>
          </ModalPassword>
        </BackGroudModalPassword>
      ) : (
        ""
      )}
    </div>
  );
};
