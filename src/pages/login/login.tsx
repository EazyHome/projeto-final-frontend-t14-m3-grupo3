import { Footer } from "../../components/Footer/footer";
import { NavLogin } from "../../components/NavLogin/navLogin";
import { LoginBackGround, LoginConteiner } from "../Login/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../../components/Form/style";
import {
  UserContext,
  iUserLogin,
} from "../../contexts/UserContext/UserContext";
import { useContext } from "react";

export const Login = () => {
  const { userLogin } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup.string().required("Senha obrigatoria"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction: SubmitHandler<iUserLogin> = (data) => {
    userLogin(data);
  };

  return (
    <LoginBackGround>
      <NavLogin />
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
      <Footer id="footer" />
    </LoginBackGround>
  );
};
