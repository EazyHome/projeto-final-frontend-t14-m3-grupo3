import React, { useContext, useEffect, useState } from "react";
import {
  DashContent,
  DashNav,
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
  DashboardServiceConteiner,
  SectionDashboardServiceTop,
} from "./style";
import providerRegisterButtonImg from "../../../assets/img/providerRegisterButtonImg.png";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Footer } from "../../../components/FooterRegisterAndLogin/footer";
import { ProfileContext } from "../../../contexts/ProfileContext/ProfileContext";
import { CitiesContext } from "../../../contexts/CitiesContext/CitiesContext";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { iUserClient } from "../../../contexts/UserContext/UserContext";
import { FormHelperText, MenuItem, Select } from "@mui/material";
import { Button } from "../../../components/Button/Button";
import { ModalChangePassword } from "../../../components/ModalChangePassword/ModalChangePassword";
import { NavDashboardClient } from "../../../components/NavDashboard/navBarDashboard";
import { ProvidedServicesFeedList } from "../../../components/ProvidedServices/providedServices";

export const DashboardService = () => {
  const [selectedOption, setSelectedOption] = React.useState("service");
  const stylesItems = { textAlign: "right", fontSize: 10 };
  const { isLogged, getActiveServices, getDoneServices, getCanceledServices } =
    useContext(ProfileContext);

  useEffect(() => {
    isLogged();
    getDoneServices();
    getActiveServices();
    getCanceledServices();
  }, []);

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
    <DashboardServiceConteiner>
      <ModalChangePassword
        modalPassword={modalPassword}
        setModalPassword={setModalPassword}
      />
      <NavDashboardClient />
      <SectionDashboardServiceTop>
        <TextSectionTop>
          Complete seu cadastro e conecte-se a mais clientes na sua região
        </TextSectionTop>
      </SectionDashboardServiceTop>

      <DashContent>
        <DashNav>
          <List component="ul" disablePadding sx={stylesItems}>
            <ListItemButton onClick={() => setSelectedOption("services")}>
              <ListItemText primary="SERVIÇOS PRESTADOS" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedOption("perfil")}>
              <ListItemText primary="EDITAR PERFIL" />
            </ListItemButton>
          </List>
        </DashNav>
        {selectedOption === "perfil" ? (
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
        ) : (
          <ProvidedServicesFeedList />
        )}
      </DashContent>
      <Footer id="footer" />
    </DashboardServiceConteiner>
  );
};