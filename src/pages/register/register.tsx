import { NavRegister } from "../../components/NavRegister/NavRegister";
import { RegisterButtonsCoteiner, RegisterConteiner } from "./style";
import imgClientRegister from "./../../assets/img/clientRegisterButtonImg.png";
import imgProviderRegister from "./../../assets/img/providerRegisterButtonImg.png";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { ModalClientRegister } from "../../components/modalRegisterClient/modalClient";
import { ModalProvidertRegister } from "../../components/modalRegisterProvider/modalProvider";

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
      <Footer />

      {showClientModal ? (
        <ModalClientRegister setShowClientModal={setShowClientModal} />
      ) : null}
      {showProviderModal ? (
        <ModalProvidertRegister setShowProviderModal={setShowProviderModal} />
      ) : null}
    </RegisterConteiner>
  );
}
