/* eslint-disable react/jsx-no-duplicate-props */
import { BackGroundForm } from "../BackgroundModal/style";
import { Form, FormConteiner } from "../Form/style";
import { SelectConteiner } from "./style";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import {
  iUserServiceRegister,
  UserContext,
} from "../../contexts/UserContext/UserContext";
import { CitiesContext } from "../../contexts/CitiesContext/CitiesContext";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";
// import { width } from "@mui/system";
interface iModalClientRegisterProps {
  setShowProviderModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalProvidertRegister({
  setShowProviderModal,
}: iModalClientRegisterProps) {
  const { userServiceRegister } = useContext(UserContext);
  const {
    disable,
    statesList,
    citiesList,
    selectState,
    servicesCategories,
    getStates,
  } = useContext(CitiesContext);

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
    name: yup.string().required("Nome obrigatorio"),
    state: yup.string().required("Estado obrigatorio"),
    workOnCities: yup.string().required("Cidade obrigatoria"),
    workOnCategories: yup.string().required("Categoria obrigatoria"),
    age: yup.number().required("Idade obrigatoria"),
    phone: yup.string().required("Contato obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserServiceRegister>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmitFuntion: SubmitHandler<iUserServiceRegister> = (data) => {
    data = {
      ...data,
      ratings: [],
      type: "prestador",
      available: true,
      avatar_URL:
        "https://i.pinimg.com/originals/4b/3e/02/4b3e0279e016cc145240de10c8a06fb6.png",
    };
    userServiceRegister(data);
  };

  return (
    <BackGroundForm>
      <FormConteiner>
        <div>
          <p>Cadastro provedor</p>
          <button onClick={() => setShowProviderModal(false)}>X</button>
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
              <div className="selectWidth50">
                <span>Estado</span>
                <Select
                  label="Estado"
                  {...register("state")}
                  onChange={selectState}
                >
                  {statesList.map((e) => {
                    return (
                      <MenuItem key={e.id} value={e.id}>
                        {e.sigla}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText>
                  {(errors.state as any)?.message}
                </FormHelperText>
              </div>
              <div className="selectWidth50">
                <span>Serviço</span>
                <Select label="Categoria" {...register("workOnCategories")}>
                  {servicesCategories.map((e) => {
                    return (
                      <MenuItem key={e} value={e}>
                        {e}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText>
                  {(errors.workOnCategories as any)?.message}
                </FormHelperText>
              </div>
            </div>
            <span>Cidade</span>
            <div className="selectWidth100">
              <Select
                sx={{ width: "100%" }}
                label="Cidade"
                disabled={disable}
                {...register("workOnCities")}
              >
                {citiesList.map((e) => {
                  return (
                    <MenuItem key={e.id} value={e.nome}>
                      {e.nome}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>
                {(errors.workOnCities as any)?.message}
              </FormHelperText>
            </div>
          </SelectConteiner>
          <button type="submit">Cadastrar</button>
        </Form>
      </FormConteiner>
    </BackGroundForm>
  );
}
