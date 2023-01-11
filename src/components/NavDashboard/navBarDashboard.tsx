import {
  BtnMenuNav,
  DivAvatar,
  DivLinksNav,
  DivLogo,
  DivNavRight,
  DivSideMenu,
  NavBar,
} from "./style";
import logo from "../../assets/img/logoEazyHomeVersao4.png";
import client from "../../assets/img/cliente.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export function NavDashboardClient() {
  const [menu, setMenu] = useState(false);
  const { userLogout } = useContext(UserContext);

  return (
    <NavBar>
      <DivLogo>
        <img src={logo} alt="Logo" />
      </DivLogo>
      <BtnMenuNav onClick={() => setMenu(!menu)}>
        {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </BtnMenuNav>
      <DivSideMenu display={menu}>
        <DivAvatar>
          <img src={client} alt="Cliente" />
        </DivAvatar>
        <Link to="/login" onClick={() => userLogout()}>
          LOGOUT
        </Link>
      </DivSideMenu>
      <DivLinksNav>
        <Link to="/login" onClick={() => userLogout()}>
          LOGOUT
        </Link>
        <DivAvatar>
          <img src={client} alt="Cliente" />
        </DivAvatar>
      </DivLinksNav>
    </NavBar>
  );
}
