import { BtnMenuNav, DivLinksNav, DivLogo, DivSideMenu, NavBar } from "./style";
import logo from "../../assets/img/logoEazyHomeVersao4.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

export function NavRegister() {
  const [menu, setMenu] = useState(false);

  return (
    <NavBar>
      <DivLogo>
        <img src={logo} alt="Logo" />
      </DivLogo>
      <BtnMenuNav onClick={() => setMenu(!menu)}>
        {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </BtnMenuNav>
      <DivSideMenu display={menu}>
        <a>HOME</a>
        <a>LOGIN</a>
      </DivSideMenu>
      <DivLinksNav>
        <a>HOME</a>
        <a>LOGIN</a>
      </DivLinksNav>
    </NavBar>
  );
}
