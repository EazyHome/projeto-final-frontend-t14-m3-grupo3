import { BtnMenuNav, DivLinksNav, DivLogo, DivSideMenu, NavBar } from "./style";
import logo from "../../assets/img/logoEazyHomeVersao4.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

export function NavDashboardClient() {
  const [menu, setMenu] = useState(false);

  return (
    <NavBar>
      <DivLogo>
        <img src={logo} />
      </DivLogo>
      <BtnMenuNav onClick={() => setMenu(!menu)}>
        {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </BtnMenuNav>
      <DivSideMenu display={menu}>
        <a>LOGOUT</a>
      </DivSideMenu>
      <DivLinksNav>
        <a>LOGOUT</a>
      </DivLinksNav>
    </NavBar>
  );
}
