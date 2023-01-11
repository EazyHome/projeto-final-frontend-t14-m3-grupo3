import { NavRegister } from "../../components/NavRegister/NavRegister";
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
  const [showButtonContainer, setShowButtonContainer] = useState(true);

  return (
    <>
      <RegisterConteiner>
        <NavRegister />

        {showButtonContainer ? (
          <RegisterButtonsCoteiner>
            <div
              onClick={() => {
                setShowButtonContainer(false);
                setShowClientModal(true);
              }}
            >
              <img src={imgClientRegister} alt="Cadastro do cliente" />
              <p>Cadastro do cliente</p>
            </div>
            <div
              onClick={() => {
                setShowButtonContainer(false);
                setShowProviderModal(true);
              }}
            >
              <img src={imgProviderRegister} alt="Cadastro do fornecedor" />
              <p>Cadastro de fornecedor</p>
            </div>
          </RegisterButtonsCoteiner>
        ) : null}

        {showClientModal ? (
          <ModalClientRegister
            setShowClientModal={setShowClientModal}
            setShowButtonContainer={setShowButtonContainer}
          />
        ) : null}
        {showProviderModal ? (
          <ModalProvidertRegister
            setShowProviderModal={setShowProviderModal}
            setShowButtonContainer={setShowButtonContainer}
          />
        ) : null}
        <Footer id="footer" />
      </RegisterConteiner>
    </>
  );
}
