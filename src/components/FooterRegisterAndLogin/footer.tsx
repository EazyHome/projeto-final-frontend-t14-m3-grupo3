import React from "react";
import {
//   DivContacts,
  DivFooter,
  DivContactsIcons,
  DivContactsInfo,
} from "./style";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

interface iDiv {
  id: string;
}

export const Footer = ({ id }: iDiv) => {
  return (
    <DivFooter id={id}>
      
        <DivContactsIcons>
          <a href="#">
            <SiFacebook size={24} />
          </a>
          <a href="#">
            <AiFillTwitterCircle size={26} />
          </a>
          <a href="#">
            <IoLogoWhatsapp size={26} />
          </a>
          <a href="#">
            <AiFillInstagram size={26} />
          </a>
        </DivContactsIcons>

        <DivContactsInfo>
          <p>Telefone: (+11) 11 1234-5678 </p>
          <p>Email: eazyhome@mail.com</p>
        </DivContactsInfo>
      
    </DivFooter>
  );
};
