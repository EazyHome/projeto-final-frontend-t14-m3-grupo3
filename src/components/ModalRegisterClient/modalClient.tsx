import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormConteiner } from "../Form/style";
import { SelectConteiner } from "./style";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText, styled } from "@mui/material";
import img from "./../../assets/img/btvVoltarRegister.png";

import {
  iUserClientRegister,
  UserContext,
} from "../../contexts/UserContext/UserContext";
import { useContext, useEffect } from "react";
import { CitiesContext } from "../../contexts/CitiesContext/CitiesContext";
import { Button } from "../Button/Button";

interface iModalClientRegisterProps {
  setShowClientModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowButtonContainer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "var(--color-primary)",
  },
  "& .MuiFormLabel-root": {
    color: "var(--color-opposite-1)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid var(--color-opposite-1)",
    },
    "&:hover fieldset": {
      border: "2px solid var(--color-primary)",
    },
  },
});

export function ModalClientRegister({
  setShowClientModal,
  setShowButtonContainer,
}: iModalClientRegisterProps) {
  const { userClientRegister } = useContext(UserContext);
  const { disable, statesList, citiesList, selectState, getStates } =
    useContext(CitiesContext);

  useEffect(() => {
    getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de oito caracteres, pelo menos uma letra, um número e um símbolo"
      ),
    confirmPassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "Senha não confere"),
    name: yup.string().required("Nome obrigatorio"),
    state: yup.string().required("Estado obrigatorio"),
    city: yup.string().required("Cidade obrigatoria"),
    age: yup.number().required("Idade obrigatoria"),
    phone: yup.string().required("Contato obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserClientRegister>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmitFuntion: SubmitHandler<iUserClientRegister> = (data) => {
    delete data.confirmPassword;
    data = {
      ...data,
      type: "cliente",
      avatar_URL:
        "https://i.pinimg.com/originals/4b/3e/02/4b3e0279e016cc145240de10c8a06fb6.png",
    };
    userClientRegister(data);
  };
  return (
    <FormConteiner>
      <div>
        <p>Cadastro cliente</p>
        <div
          onClick={() => {
            setShowButtonContainer(true);
            setShowClientModal(false);
          }}
        >
          <img src={img} alt="" />
        </div>
      </div>
      <Form onSubmit={handleSubmit(onSubmitFuntion)}>
        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
          helperText={(errors.email as any)?.message}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          helperText={(errors.password as any)?.message}
        />
        <TextField
          label="Confirmar Senha"
          variant="outlined"
          type="password"
          placeholder="Digite sua senha"
          {...register("confirmPassword")}
          helperText={(errors.confirmPassword as any)?.message}
        />
        <TextField
          label="Nome"
          variant="outlined"
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
          helperText={(errors.name as any)?.message}
        />
        <TextField
          label="Idade"
          variant="outlined"
          type="number"
          placeholder="Digite sua idade"
          {...register("age")}
          helperText={(errors.age as any)?.message}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          type="text"
          placeholder="Digite seu número"
          {...register("phone")}
          helperText={(errors.phone as any)?.message}
        />
        <SelectConteiner>
          <div>
            <span>Estado</span>
            <Select
              className="stateSelect"
              label="Estado"
              {...register("state")}
              onChange={selectState}
            >
              <MenuItem key="0" value="0">
                Selecione o Estado
              </MenuItem>
              {statesList.map((e) => {
                return (
                  <MenuItem key={e.id} value={e.sigla}>
                    {e.sigla}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>{(errors.state as any)?.message}</FormHelperText>
          </div>
          <div>
            <span>Cidade</span>
            <Select
              className="citySelect"
              label="Cidade"
              disabled={disable}
              {...register("city")}
            >
              <MenuItem key="0" value="0"></MenuItem>
              {citiesList.map((e) => {
                return (
                  <MenuItem key={e.id} value={e.nome}>
                    {e.nome}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>{(errors.city as any)?.message}</FormHelperText>
          </div>
        </SelectConteiner>
        <Button type="submit" text="Cadastrar" />
      </Form>
    </FormConteiner>
  );
}
