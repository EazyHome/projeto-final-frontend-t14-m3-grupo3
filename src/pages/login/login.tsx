import { Footer } from "../../components/FooterRegisterAndLogin/footer";
import { NavLogin } from "../../components/NavLogin/navLogin";
import { LoginBackGround, LoginConteiner } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../../components/Form/style";
import {
  UserContext,
  iUserLogin,
} from "../../contexts/UserContext/UserContext";
import { useContext } from "react";
import { Button } from "../../components/Button/Button";
import TextField from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";

export const Login = () => {
  const { userLogin } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup
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
    formState: { errors, isDirty, isValid },
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

          <Button text="Cadastrar" />
        </Form>
      </LoginConteiner>
      <Footer id="footer" />
    </LoginBackGround>
  );
};
