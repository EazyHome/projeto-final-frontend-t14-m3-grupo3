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
import providerRegisterButtonImg from "../../../assets/img/providerRegisterButtonImg.png";
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
import { iUserClient } from "../../../contexts/UserContext/UserContext";
import { FormHelperText, MenuItem, Select } from "@mui/material";
import { Button } from "../../../components/Button/Button";
import { ModalChangePassword } from "../../../components/ModalChangePassword/ModalChangePassword";
import { ClientHiredProvidersFeedList } from "../../../components/ClientHiredProviders/clientHiredProviders";
import { StatesAPI } from "../../../service/statesApi";
import api from "../../../service/api";

export const DashboardClient = () => {
  const [open, setOpen] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("service");
  const stylesItems = { textAlign: "right", fontSize: 10 };
  const {
    isLogged,
    getProviders,
    setCategory,
    category,
    getActiveServices,
    getCanceledServices,
    getDoneServices,
    getPhoto,
    editProfile,
  } = useContext(ProfileContext);
  const {
    disable,
    statesList,
    citiesList,
    selectState,
    getStates,
    servicesCategories,
  } = useContext(CitiesContext);

  useEffect(() => {
    isLogged();
    getProviders();
    getStates();
    getActiveServices();
    getDoneServices();
    getCanceledServices();
    getPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [getClientInfo, setClientInfo] = useState<iUserClient>();

  const getClientInfos = async () => {
    const id = localStorage.getItem("@Id:EazyHome");
    try {
      const response = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
        },
      });
      setClientInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClientInfos();
  }, []);

  const handleClickService = () => {
    setOpen(!open);
    setSelectedOption("service");
    setCategory("");
  };

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
  } = useForm<iUserClient>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const [modalPassword, setModalPassword] = useState(false);
  const [workCitiesEdit, setWorkCitiesEdit] = useState<string[]>([]);
  const [workStateEdit, setStateEdit] = useState("");
  const [categoriesEdit, setCategoriesEdit] = useState<string[]>([]);

  const handleSubmitEditForm = (data: iUserClient) => {
    editProfile(data);
    console.log(data);
  };

  let city = "";
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

  const categoryChange = (e: any) => {
    setCategory(e);
    setSelectedOption("service");
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
                      onClick={() => categoryChange(e.name)}
                    >
                      <ListItemText primary={e.name} className="NavSubItem" />
                    </ListItemButton>
                  );
                })}
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
                      img={service.image}
                      type={service.name}
                      onClick={() => setCategory(service.name)}
                    />
                  ) : (
                    <BlueCard
                      img={service.image}
                      type={service.name}
                      onClick={() => setCategory(service.name)}
                    />
                  );
                })}
              </ServicesList>
              <div></div>
            </ContentServices>
          </Services>
        ) : selectedOption === "perfil" ? (
          <DivEditProfile>
            <DivEditProfileHeader>
              <h3>Editar perfil</h3>
              <img src={getClientInfo?.avatar_URL} alt="" />
            </DivEditProfileHeader>

            <FormEdit onSubmit={handleSubmit(handleSubmitEditForm)}>
              <DivEditNomeEmail>
                <TextField
                  className="name"
                  label="Nome"
                  variant="outlined"
                  type="text"
                  placeholder={`${getClientInfo?.name}`}
                  {...register("name")}
                  helperText={(errors.name as any)?.message}
                />
                <TextField
                  className="email"
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  placeholder={`${getClientInfo?.email}`}
                  {...register("email")}
                  helperText={(errors.email as any)?.message}
                />
                <TextField
                  className="avatar"
                  label="Link do Avatar"
                  variant="outlined"
                  type="text"
                  placeholder={`${getClientInfo?.avatar_URL}`}
                  {...register("avatar_URL")}
                  helperText={(errors.avatar_URL as any)?.message}
                />
              </DivEditNomeEmail>

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
                </StateAndButton>

                <CoverAgePhone>
                  <Age>
                    <TextField
                      className="age"
                      label="Idade"
                      variant="outlined"
                      type="number"
                      placeholder={`${getClientInfo?.age}`}
                      {...register("age")}
                    />
                  </Age>
                  <DivPhone>
                    <TextField
                      label="Telefone"
                      variant="outlined"
                      type="text"
                      placeholder={`${getClientInfo?.phone}`}
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
