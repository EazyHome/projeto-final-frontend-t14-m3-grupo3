import React, { useContext, useEffect } from "react";
import {
  DashContent,
  DashNav,
  DashboardClientConteiner,
  SectionDashboardClientTop,
  Services,
  TextSectionTop,
} from "../../../pages/Dashboard/client/style";
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
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { OrangeCard } from "../../../components/CardOrange/card";
import { BlueCard } from "../../../components/CardBlue/card";
import { NavDashboardClient } from "../../../components/NavDashboard/navBarDashboard";
import { Footer } from "../../../components/FooterRegisterAndLogin/footer";
import { ProfileContext } from "../../../contexts/ProfileContext/ProfileContext";
import { ContentServices, ServicesList } from "../../Homepage/style";
import { CitiesContext } from "../../../contexts/CitiesContext/CitiesContext";
import { ClientProvidersFeedList } from "../../../components/ClientProvidersFeedList/clientProvidersFeedList";
import { ClientHiredProvidersFeedList } from "../../../components/ClientHiredProviders/clientHiredProviders";

export const DashboardClient = () => {
  const [open, setOpen] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("service");
  const stylesItems = { textAlign: "right", fontSize: 10 };
  const { isLogged, getProviders, setCategory, category } =
    useContext(ProfileContext);
  const { servicesCategories } = useContext(CitiesContext);

  useEffect(() => {
    isLogged();
    getProviders();
  }, []);

  const handleClickService = () => {
    setOpen(!open);
    setSelectedOption("service");
    setCategory("");
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
            <ListItemButton onClick={handleClickService}>
              <ListItemText primary="SERVIÇOS" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="ul" disablePadding>
                {servicesCategories.map((e, index) => {
                  return (
                    <ListItemButton
                      key={index}
                      defaultValue={e.name}
                      sx={{ pl: 4 }}
                      onClick={() => setCategory(e.name)}
                    >
                      <ListItemText primary={e.name} className="NavSubItem" />
                    </ListItemButton>
                  );
                })}
                {/* <ListItemButton sx={{ pl: 4 }}>
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
                </ListItemButton> */}
              </List>
            </Collapse>
            <ListItemButton onClick={() => setSelectedOption("perfil")}>
              <ListItemText primary="EDITAR PERFIL" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedOption("contratacao")}>
              <ListItemText primary="CONTRATAÇÕES" />
            </ListItemButton>
          </List>
        </DashNav>
        {selectedOption === "service" && category === "" ? (
          <Services id="services">
            <ContentServices>
              <h3>- Serviços -</h3>
              <ServicesList>
                {servicesCategories.map((service, index) => {
                  const result = index % 2;
                  return !result ? (
                    <OrangeCard
                      img={pintor}
                      type={service.name}
                      onClick={() => setCategory(service.name)}
                    />
                  ) : (
                    <BlueCard
                      img={pedreiro}
                      type={service.name}
                      onClick={() => setCategory(service.name)}
                    />
                  );
                })}
                {/* <OrangeCard img={pintor} type="Pintor" onClick={setCategory()}/>
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
                <BlueCard img={serralheiro} type="Serralheiro" /> */}
              </ServicesList>
              <div></div>
            </ContentServices>
          </Services>
        ) : selectedOption === "perfil" ? (
          <>Em desenvolvimento</>
        ) : selectedOption === "contratacao" ? (
          <ClientHiredProvidersFeedList />
        ) : (
          <ClientProvidersFeedList />
        )}
      </DashContent>
      <Footer id="footer" />
    </DashboardClientConteiner>
  );
};
