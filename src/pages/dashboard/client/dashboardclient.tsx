import React, { useContext, useEffect, useState } from "react";
import {
  DashContent,
  DashNav,
  DashboardClientConteiner,
  SectionDashboardClientTop,
  Services,
  TextSectionTop,
  DivEditProfile,
  DivEditProfileHeader,
  WorkCities,
  AddCity,
  StateAndButton,
  CoverLabelStateSpan,
  SelectCity,
  Categories,
  SelectCategory,
  Age,
  DivPhone,
  DivEditNomeEmail,
  FormEdit,
  DivCoverCategory,
  CoverAgePhone,
} from "../../dashboard/client/style";
import { ContentServices, ServicesList } from "../../homepage/style";
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
import providerRegisterButtonImg from "../../../assets/img/providerRegisterButtonImg.png";
import workers from "../../../assets/img/workers.jpeg";
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
import { CitiesContext } from "../../../contexts/CitiesContext/CitiesContext";
import { ClientProvidersFeedList } from "../../../components/ClientProvidersFeedList/clientProvidersFeedList";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  iUserClient,
  iUserClientRegister,
} from "../../../contexts/UserContext/UserContext";
import { Form } from "../../../components/Form/style";
import { SelectConteiner } from "../../../components/ModalRegisterClient/style";
import { FormHelperText, MenuItem, Select } from "@mui/material";
import { Button } from "../../../components/Button/Button";
import { ModalChangePassword } from "../../../components/ModalChangePassword/ModalChangePassword";
import { ClientHiredProvidersFeedList } from "../../../components/ClientHiredProviders/clientHiredProviders";

export const DashboardClient = () => {
  const [open, setOpen] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("service");
  const stylesItems = { textAlign: "right", fontSize: 10 };
  const { isLogged, getProviders, setCategory, category } =
    useContext(ProfileContext);

  useEffect(() => {
    isLogged();
    getProviders();
  }, []);

  const handleClickService = () => {
    setOpen(!open);
    setSelectedOption("service");
    setCategory("");
  };

  const {
    disable,
    statesList,
    citiesList,
    selectState,
    getStates,
    servicesCategories,
  } = useContext(CitiesContext);

  useEffect(() => {
    getStates();
  }, []);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    name: yup.string().required("Nome obrigatorio"),
    state: yup.string().required("Estado obrigatorio"),
    city: yup.string().required("Cidade obrigatoria"),
    age: yup.number().required("Idade obrigatoria"),
    phone: yup.string().required("Contato obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<iUserClient>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const [modalPassword, setModalPassword] = useState(false);

  const [workCitiesEdit, setWorkCitiesEdit] = useState<string[]>([]);
  const [workStateEdit, setStateEdit] = useState("");
  const [categoriesEdit, setCategoriesEdit] = useState<string[]>([]);

  const handleSubmitEditForm = (data: iUserClient) => {
    console.log(data);
  };

  let city = "";
  let state = "";
  let cityState = "";

  const getStateEditForm = (e: any) => {
    e.preventDefault();
    selectState(e);
    setStateEdit(e.target.value);
  };

  const getCityEditForm = (e: any) => {
    e.preventDefault();
    city = e.target.value;
  };

  const setCitySubmit = () => {
    cityState = city + "-" + workStateEdit;
    setWorkCitiesEdit([...workCitiesEdit, cityState]);
  };

  let getCategory = "";
  const getCategories = (e: any) => {
    e.preventDefault();
    getCategory = e.target.value;
  };

  const setCategorySubmit = () => {
    setCategoriesEdit([...categoriesEdit, getCategory]);
  };

  return (
    <DashboardClientConteiner>
      <ModalChangePassword
        modalPassword={modalPassword}
        setModalPassword={setModalPassword}
      />
      <NavDashboardClient />

      <SectionDashboardClientTop>
        <div>
          <TextSectionTop>
            Precisando de um profissional para manutenção residencial? O lugar é
            aqui!
          </TextSectionTop>
        </div>
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
          <DivEditProfile>
            <DivEditProfileHeader>
              <h3>Editar perfil</h3>
              <img src={providerRegisterButtonImg} alt="" />
            </DivEditProfileHeader>

            <FormEdit onSubmit={handleSubmit(handleSubmitEditForm)}>
              <DivEditNomeEmail>
                <TextField
                  className="name"
                  label="Nome"
                  variant="outlined"
                  type="text"
                  placeholder="Eduardo"
                  {...register("name")}
                  helperText={(errors.name as any)?.message}
                />
                <TextField
                  className="email"
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  placeholder="Digite seu email"
                  {...register("email")}
                  helperText={(errors.email as any)?.message}
                />
              </DivEditNomeEmail>

              <WorkCities>
                <h4>Cidades onde atende:</h4>
                {workCitiesEdit.map((e, i) => {
                  return (
                    <ul>
                      <li key={i}>{e}</li>
                    </ul>
                  );
                })}
              </WorkCities>

              <AddCity>
                <StateAndButton>
                  <div id="DivLocal">
                    <CoverLabelStateSpan>
                      <span>Estado</span>
                      <Select
                        className="stateSelect"
                        label="Estado"
                        {...register("state")}
                        onChange={getStateEditForm}
                      >
                        {statesList.map((e) => {
                          return (
                            <MenuItem key={e.id} value={e.sigla}>
                              {e.sigla}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>
                        {(errors.state as any)?.message}
                      </FormHelperText>
                    </CoverLabelStateSpan>
                    <SelectCity>
                      <span>Cidade</span>
                      <Select
                        className="citySelect"
                        label="Cidade"
                        disabled={disable}
                        {...register("city")}
                        onChange={getCityEditForm}
                      >
                        {citiesList.map((e) => {
                          return (
                            <MenuItem key={e.id} value={e.nome}>
                              {e.nome}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>
                        {(errors.city as any)?.message}
                      </FormHelperText>
                    </SelectCity>
                  </div>
                  <Button
                    type="button"
                    id={"addCityButton"}
                    callback={() => setCitySubmit()}
                    text="Adicionar cidade"
                  />
                </StateAndButton>

                <Categories>
                  <h4>Categorias:</h4>

                  {categoriesEdit.map((e, i) => {
                    return (
                      <ul>
                        <li key={i}>{e}</li>
                      </ul>
                    );
                  })}

                  <DivCoverCategory>
                    <SelectCategory>
                      <span>Categoria</span>
                      <Select
                        className="Category"
                        label="Categoria"
                        onChange={getCategories}
                      >
                        {servicesCategories.map((e, i) => {
                          return (
                            <MenuItem key={i} value={e.name}>
                              {e.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </SelectCategory>
                    <button type="button" onClick={() => setCategorySubmit()}>
                      Adicionar Categoria
                    </button>
                  </DivCoverCategory>
                </Categories>

                <CoverAgePhone>
                  <Age>
                    <TextField
                      className="age"
                      label="Idade"
                      variant="outlined"
                      type="number"
                      placeholder="Digite sua idade"
                      {...register("age")}
                    />
                  </Age>
                  <DivPhone>
                    <TextField
                      label="Telefone"
                      variant="outlined"
                      type="text"
                      placeholder="Digite seu número"
                      {...register("phone")}
                      helperText={(errors.phone as any)?.message}
                    />
                  </DivPhone>
                  <Button
                    type="button"
                    callback={() => setModalPassword(true)}
                    text="Alterar Senha"
                  />
                  <button type="submit" id="saveChanges">
                    Salvar alterações
                  </button>
                </CoverAgePhone>
              </AddCity>
            </FormEdit>
          </DivEditProfile>
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
