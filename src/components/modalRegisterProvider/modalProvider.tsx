import { BackGroudForm } from "../BackgroundModal/style";
import { Form, FormConteiner } from "../Form/style";
import { SelectConteiner } from "./style";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import {
  iUserServiceRegister,
  UserContext,
} from "../../contexts/UserContext/userContext";
import { CitiesContext } from "../../contexts/CitiesContext/citiesContext";

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
    selectCity,
    selectState,
    servicesCategories,
    getStates,
  } = useContext(CitiesContext);

  useEffect(() => {
    getStates();
  });

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
  } = useForm<iUserServiceRegister>({ resolver: yupResolver(formSchema) });

  const onSubmitFuntion: SubmitHandler<iUserServiceRegister> = (data) => {
    userServiceRegister(data);
  };

  return (
    <BackGroudForm>
      <FormConteiner>
        <div>
          <p>Cadastro provedor</p>
          <button onClick={() => setShowProviderModal(false)}>X</button>
        </div>
        <Form onSubmit={handleSubmit(onSubmitFuntion)}>
          <input
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
            type="text"
            placeholder="Digite sua idade"
            {...register("age")}
          />
          <input
            type="text"
            placeholder="Digite seu numero"
            {...register("phone")}
          />
          <SelectConteiner>
            <div>
              <div>
                <span>Estado</span>
                <select {...register("state")} onChange={selectState}>
                  <option value={0}>Selecione seu Estado</option>
                  {statesList.map((e) => {
                    return (
                      <option key={e.id} value={e.id}>
                        {e.nome}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <span>Serviço</span>
                <select {...register("workOnCategories")}>
                  <option key={""} value="">
                    Selecione sua Categoria
                  </option>
                  {servicesCategories.map((e) => {
                    return (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <span>Cidade</span>
            <select
              id=""
              disabled={disable}
              {...register("workOnCities")}
              onChange={selectCity}
            >
              <option value="">Selecione seu Estado</option>
              {citiesList.map((e) => {
                return (
                  <option key={e.id} value={e.nome}>
                    {e.nome}
                  </option>
                );
              })}
            </select>
          </SelectConteiner>
          <button>Cadastrar</button>
        </Form>
      </FormConteiner>
    </BackGroudForm>
  );
}
