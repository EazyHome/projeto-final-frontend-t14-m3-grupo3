import { BackGroudForm } from "../../../components/backgroundmodal/modalStyle";
import { Form, FormConteiner } from "../../../components/Form/FormStyle";
import { SelectConteiner } from "./modalProviderStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface iModalClientRegisterProps {
  setShowProviderModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalProvidertRegister({
  setShowProviderModal,
}: iModalClientRegisterProps) {
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
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFuntion() {
    //Função de submit
  }

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
                <select id="" {...register("state")}>
                  <option value="CE">CE</option>
                </select>
              </div>
              <div>
                <span>Serviço</span>
                <select id="" {...register("workOnCategories")}>
                  <option value="Pintor">Pintor(a)</option>
                </select>
              </div>
            </div>
            <span>Cidade</span>
            <select id="" {...register("workOnCities")}>
              <option value="Fortaleza">Fortaleza</option>
            </select>
          </SelectConteiner>
          <button>Cadastrar</button>
        </Form>
      </FormConteiner>
    </BackGroudForm>
  );
}
