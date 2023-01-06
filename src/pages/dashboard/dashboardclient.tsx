import React from "react";
import { NavDashboardClient } from "../../components/NavDashboardClient/NavDashboardClient";
import {
  DashContent,
  DashNav,
  DashboardClientConteiner,
  SectionDashboardClientTop,
  Services,
  TextSectionTop,
} from "./style";
import eletricista from "../../assets/img/eletricista.png";
import encanador from "../../assets/img/encanador.png";
import gas from "../../assets/img/gás.png";
import janelas from "../../assets/img/janelas.png";
import jardim from "../../assets/img/jardineiro.png";
import telhado from "../../assets/img/ManutencaoDeTelhado.png";
import marceneiro from "../../assets/img/marceneiro.png";
import pedreiro from "../../assets/img/pedreiro.png";
import pintor from "../../assets/img/pintor.png";
import piscina from "../../assets/img/piscina.png";
import piso from "../../assets/img/piso.png";
import serralheiro from "../../assets/img/serralheiro.png";
import { Footer } from "../../components/Footer/Footer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

export const DashboardClientPage = () => {
  const [open, setOpen] = React.useState(true);

  const stylesItems = { textAlign: "right", fontSize: 10 };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <DashboardClientConteiner>
      <NavDashboardClient />
      <SectionDashboardClientTop>
        <TextSectionTop>
          Precisando de um profissional para manutenção residencial? O lugar é
          aqui!
        </TextSectionTop>
      </SectionDashboardClientTop>

      <DashContent>
        <DashNav>
          <List component="ul" disablePadding sx={stylesItems}>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="SERVICES" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="ul" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="ELETRICISTA" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="ENCANADOR" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="GÁS" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="JANELAS" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="JARDIM" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="PEDREIRO" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="PISO" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="PISCINA" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="PINTOR" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="SERRALHEIRO" className="NavSubItem" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="TELHADO" className="NavSubItem" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="EDITAR PERFIL" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="CONTRATAÇÕES" />
            </ListItemButton>
          </List>
        </DashNav>
        <Services>
          <div className="container">
            <h3>Serviços</h3>
            <ul className="servicesCards">
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={pintor} alt="Pintor" />
                </div>
                <p>Pintor</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={pedreiro} alt="Pedreiro" />
                </div>
                <p>Pedreiro</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={marceneiro} alt="marceneiro" />
                </div>
                <p>Marceneiro</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={telhado} alt="telhado" />
                </div>
                <p>Telhado</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={jardim} alt="jardim" />
                </div>
                <p>Jardim</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={janelas} alt="janelas" />
                </div>
                <p>Janelas</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={gas} alt="gas" />
                </div>
                <p>Gas</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={encanador} alt="encanador" />
                </div>
                <p>Encanador</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={eletricista} alt="eletricista" />
                </div>
                <p>Eletricista</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={piso} alt="piso" />
                </div>
                <p>Piso</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={piscina} alt="piscina" />
                </div>
                <p>Piscina</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={serralheiro} alt="serralheiro" />
                </div>
                <p>Serralheiro</p>
              </li>
            </ul>
          </div>
        </Services>
      </DashContent>

      <Footer />
    </DashboardClientConteiner>
  );
};
