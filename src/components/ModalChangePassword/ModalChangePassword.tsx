import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { Form } from "../Form/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BackGroudModalPassword, ModalPassword } from "./style";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";

interface IChangePasswordForm {
  password: string;
  confimarNovaSenha?: string;
}

export interface IData {
  password: string;
  confimarNovaSenha?: string;
}

interface ISTATE {
  modalPassword: boolean;
  setModalPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalChangePassword = ({
  modalPassword,
  setModalPassword,
}: ISTATE) => {
  const { changePassword } = useContext(ProfileContext);

  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de oito caracteres, pelo menos uma letra, um número e um símbolo"
      ),
    confimarNovaSenha: yup
      .string()
      .required("Senha obrigatoria")
      .oneOf([yup.ref("password")], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePasswordForm>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

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
                {...register("password")}
                helperText={(errors.password as any)?.message}
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
