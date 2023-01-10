import { NavRegister } from "../../components/NavRegister/navRegister";
import imgClientRegister from "./../../assets/img/clientRegisterButtonImg.png";
import imgProviderRegister from "./../../assets/img/providerRegisterButtonImg.png";
import { useState } from "react";
import { Footer } from "../../components/FooterRegisterAndLogin/footer";
import { ModalClientRegister } from "../../components/ModalRegisterClient/modalClient";
import { ModalProvidertRegister } from "../../components/ModalRegisterProvider/modalProvider";
import { RegisterButtonsCoteiner, RegisterConteiner } from "../Register/style";

export function Register() {
  const [showClientModal, setShowClientModal] = useState(false);
  const [showProviderModal, setShowProviderModal] = useState(false);

  return (
    <RegisterConteiner>
      <NavRegister />
      <RegisterButtonsCoteiner>
        <div onClick={() => setShowClientModal(true)}>
          <img src={imgClientRegister} alt="Cadastro do cliente" />
          <p>Cadastro do cliente</p>
        </div>
        <div onClick={() => setShowProviderModal(true)}>
          <img src={imgProviderRegister} alt="Cadastro do fornecedor" />
          <p>Cadastro de fornecedor</p>
        </div>
      </RegisterButtonsCoteiner>
      <Footer id="footer" />

      {showClientModal ? (
        <ModalClientRegister setShowClientModal={setShowClientModal} />
      ) : null}
      {showProviderModal ? (
        <ModalProvidertRegister setShowProviderModal={setShowProviderModal} />
      ) : null}
    </RegisterConteiner>
  );
}
