import { useNavigate } from "react-router-dom";
import { NavRegister } from "../../components/NavRegister/navRegister";
import { NotFoundMain } from "../NotFound/style";
import { Footer } from "../../components/Footer/footer";

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
