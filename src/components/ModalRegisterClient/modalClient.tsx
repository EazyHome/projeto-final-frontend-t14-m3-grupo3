import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormConteiner } from "../Form/style";
import { BackGroudForm } from "../../components/BackgroundModal/style";
import { SelectConteiner } from "./style";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";

import {
  iUserClientRegister,
  UserContext,
} from "../../contexts/UserContext/UserContext";
import { useContext, useEffect } from "react";
import { CitiesContext } from "../../contexts/CitiesContext/CitiesContext";
interface iModalClientRegisterProps {
  setShowClientModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalClientRegister({
  setShowClientModal,
}: iModalClientRegisterProps) {
  const { userClientRegister } = useContext(UserContext);
  const {
    disable,
    statesList,
    citiesList,
    selectCity,
    selectState,
    getStates,
  } = useContext(CitiesContext);

  useEffect(() => {
    getStates();
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
    city: yup.string().required("Cidade obrigatoria"),
    age: yup.number().required("Idade obrigatoria"),
    phone: yup.string().required("Contato obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iUserClientRegister>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmitFuntion: SubmitHandler<iUserClientRegister> = (data) => {
    userClientRegister(data);
  };
  return (
    <BackGroudForm>
      <FormConteiner>
        <div>
          <p>Cadastro cliente</p>
          <button onClick={() => setShowClientModal(false)}>X</button>
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
          {/* <input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <input
            type="text"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <input
            type="number"
            placeholder="Digite sua idade"
            {...register("age")}
          />
          <input
            type="number"
            placeholder="Digite seu numero"
            {...register("phone")}
          /> */}

          <SelectConteiner>
            <div>
              <span>Estado</span>
              <Select
                className="stateSelect"
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
              <FormHelperText>{(errors.state as any)?.message}</FormHelperText>
            </div>
            <div>
              <span>Cidade</span>
              <Select
                className="citySelect"
                label="Cidade"
                disabled={disable}
                {...register("city")}
                onChange={selectCity}
              >
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

          {/* <SelectConteiner>
            <div>
              <span>Estado</span>
              <select className="stateSelect" id="" {...register("state")}>
              </select>
            </div>
            <div>
              <span>Cidade</span>
              <select className="citySelect" id="" {...register("city")}>
              </select>
            </div>
          </SelectConteiner> */}
          {/* <option value="CE">CE</option> */}
          {/* <option value="Fortaleza">Fortaleza</option> */}
          <button type="submit">Cadastrar</button>
        </Form>
      </FormConteiner>
    </BackGroudForm>
  );
}
