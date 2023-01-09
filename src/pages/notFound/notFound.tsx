import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/footer";
import { NavRegister } from "../../components/NavRegister/NavRegister";
import { NotFoundMain } from "../NotFound/style";

export function NotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <NotFoundMain>
      <NavRegister />
      <h1>PAGINA NÃO ENCONTRADA</h1>
      <Footer id="footer" />
    </NotFoundMain>
  );
}
