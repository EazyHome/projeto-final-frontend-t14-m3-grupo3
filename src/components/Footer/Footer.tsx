import React from "react";
import { DivFooter } from "./style";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <DivFooter>
      <div className="wrapper container">
        <div className="contactIcons">
          <SiFacebook />
          <AiFillTwitterCircle />
          <IoLogoWhatsapp />
          <AiFillInstagram />
        </div>
        <a href="top">Ir para o topo</a>
      </div>
    </DivFooter>
  );
};
