import { NavRegister } from "../../components/NavRegister/NavRegister";
import { RegisterButtonsCoteiner, RegisterConteiner } from "./registerStyle";
import imgClientRegister from "./../../assets/img/clientRegisterButtonImg.png";
import imgProviderRegister from "./../../assets/img/providerRegisterButtonImg.png";
import { useState } from "react";

export function Register() {
  const [showClientModal, setShowClientModal] = useState(false);

  return (
    <RegisterConteiner>
      <NavRegister />
      <RegisterButtonsCoteiner>
        <div onClick={() => setShowClientModal(true)}>
          <img src={imgClientRegister} alt="Cadastro do cliente" />
          <p>Cadastro do cliente</p>
        </div>
        <div>
          <img src={imgProviderRegister} alt="Cadastro do fornecedor" />
          <p>Cadastro de fornecedor</p>
        </div>
      </RegisterButtonsCoteiner>
    </RegisterConteiner>
  );
}
