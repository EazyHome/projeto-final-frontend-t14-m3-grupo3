import React from "react";
import {
  DashContent,
  DashNav,
  DashboardClientConteiner,
  SectionDashboardClientTop,
  Services,
  TextSectionTop,
} from "./style";
import eletricista from "../../../assets/img/eletricista.png";
import encanador from "../../../assets/img/encanador.png";
import gas from "../../../assets/img/gás.png";
import janelas from "../../../assets/img/janelas.png";
import jardim from "../../../assets/img/jardineiro.png";
import telhado from "../../../assets/img/ManutencaoDeTelhado.png";
import marceneiro from "../../../assets/img/marceneiro.png";
import pedreiro from "../../../assets/img/pedreiro.png";
import pintor from "../../../assets/img/pintor.png";
import piscina from "../../../assets/img/piscina.png";
import piso from "../../../assets/img/piso.png";
import serralheiro from "../../../assets/img/serralheiro.png";
import workers from "../../../assets/img/workers.jpeg";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { ContentServices, ServicesList } from "../../homepage/style";
import { OrangeCard } from "../../../components/CardOrange/card";
import { BlueCard } from "../../../components/CardBlue/card";
import { NavDashboardClient } from "../../../components/NavDashboard/navBarDashboard";
import { Footer } from "../../../components/FooterRegisterAndLogin/footer";

export const DashboardClient = () => {
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
        <Services id="services">
          <ContentServices>
            <h3>- Serviços -</h3>
            <ServicesList>
              <OrangeCard img={pintor} type="Pintor" />
              <BlueCard img={pedreiro} type="Pedreiro" />
              <OrangeCard img={marceneiro} type="Marceneiro" />
              <BlueCard img={telhado} type="Telhados" />
              <OrangeCard img={jardim} type="Jardins" />
              <BlueCard img={janelas} type="Janelas" />
              <OrangeCard img={gas} type="Gás" />
              <BlueCard img={encanador} type="Encanador" />
              <OrangeCard img={eletricista} type="Eletricista" />
              <BlueCard img={piso} type="Pisos" />
              <OrangeCard img={piscina} type="Piscinas" />
              <BlueCard img={serralheiro} type="Serralheiro" />
            </ServicesList>
            <div></div>
          </ContentServices>
        </Services>
      </DashContent>
      <Footer id="footer" />
    </DashboardClientConteiner>
  );
};
