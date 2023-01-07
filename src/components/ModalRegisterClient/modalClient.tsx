import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormConteiner } from "../Form/style";
import { BackGroudForm } from "../../components/BackgroundModal/style";
import { SelectConteiner } from "./style";

interface iModalClientRegisterProps {
  setShowClientModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalClientRegister({
  setShowClientModal,
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
    city: yup.string().required("Cidade obrigatoria"),
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
        <p>Cadastro cliente</p>
        <button onClick={() => setShowClientModal(false)}>X</button>
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
          type="number"
          placeholder="Digite sua idade"
          {...register("age")}
        />
        <input
          type="number"
          placeholder="Digite seu numero"
          {...register("phone")}
        />

        <SelectConteiner>
          <div>
            <span>Estado</span>
            <select className="stateSelect" id="" {...register("state")}>
              {/* <option value="CE">CE</option> */}
            </select>
          </div>
          <div>
            <span>Cidade</span>
            <select className="citySelect" id="" {...register("city")}>
              {/* <option value="Fortaleza">Fortaleza</option> */}
            </select>
          </div>
        </SelectConteiner>
        <button>Cadastrar</button>
      </Form>
    </FormConteiner>
    </BackGroudForm>
  );
}
