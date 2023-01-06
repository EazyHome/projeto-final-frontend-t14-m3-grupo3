import React from "react";
import {
  DivContacts,
  DivFooter,
  DivContactsIcons,
  DivContactsInfo,
} from "./style";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <DivFooter>
      <div>
        <DivContacts>
          <DivContactsIcons>
            <a>
              <SiFacebook size={24} />
            </a>
            <a>
              <AiFillTwitterCircle size={26} />
            </a>
            <a>
              <IoLogoWhatsapp size={26} />
            </a>
            <a>
              <AiFillInstagram size={26} />
            </a>
          </DivContactsIcons>

          <DivContactsInfo>
            <p>Telefone: (11) +11 1234-5678 </p>
            <p>Email: eazyhome@gmail.com</p>
          </DivContactsInfo>
        </DivContacts>

        <a href="top">Ir para o topo</a>
      </div>
    </DivFooter>
  );
};
