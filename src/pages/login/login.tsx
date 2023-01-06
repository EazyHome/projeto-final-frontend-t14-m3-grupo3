import { Footer } from "../../components/Footer/Footer";
import { NavRegister } from "../../components/NavRegister/NavRegister";
import { LoginBackGround, LoginConteiner } from "./loginStyle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "../../components/Form/FormStyle";

export const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup.string().required("Senha obrigatoria"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  function onSubmitFunction() {
    //Função de submit
  }

  return (
    <LoginBackGround>
      <NavRegister />
      <LoginConteiner>
        <div>
          <p>Login</p>
        </div>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <button>Cadastrar</button>
        </Form>
      </LoginConteiner>
      <Footer />
    </LoginBackGround>
  );
};
