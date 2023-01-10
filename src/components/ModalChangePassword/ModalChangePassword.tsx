import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Form } from "../Form/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BackGroundForm } from "../BackgroundModal/style";
import { ModalPassword } from "./style";

interface IChangePasswordForm {
  senhaAtual: string;
  novaSenha: string;
  confimarNovaSenha: string;
}

interface IData {
  senhaAtual: string;
  novaSenha: string;
  confimarNovaSenha: string;
}

export const ModalChangePassword = () => {
  const [modalPassword, setModalPassword] = useState(false);

  const formSchema = yup.object().shape({
    senhaAtual: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de oito caracteres, pelo menos uma letra, um número e um símbolo"
      ),
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
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de oito caracteres, pelo menos uma letra, um número e um símbolo"
      ),
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
    console.log(data);
  }

  return (
    <div>
      <button onClick={() => setModalPassword(true)}>
        Abrir modal de senha
      </button>
      {modalPassword ? (
        <BackGroundForm>
          <ModalPassword>
            <h3>Alterar senha</h3>
            <button id="closeButton" onClick={() => setModalPassword(false)}>
              X
            </button>
            <Form onSubmit={handleSubmit(ChangePasswordData)}>
              <TextField
                label="Senha atual"
                variant="outlined"
                type="text"
                placeholder="Senha Atual"
                {...register("senhaAtual")}
                helperText={(errors.senhaAtual as any)?.message}
              />
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
        </BackGroundForm>
      ) : (
        ""
      )}
    </div>
  );
};
