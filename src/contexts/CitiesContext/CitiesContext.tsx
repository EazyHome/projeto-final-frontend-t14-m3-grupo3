import React, { useState, createContext } from "react";
import { StatesAPI } from "../../service/statesApi";
import { iDefaultPropsProvider } from "../types";
import axios, { AxiosInstance } from "axios";
import { SelectChangeEvent } from "@mui/material";

interface iCitiesContext {
  getStates: () => void;
  statesList: [] | iStatesList[];
  citiesList: [] | iCitiesList[];
  selectState: (e: SelectChangeEvent<HTMLSelectElement>) => void;
  // selectState: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  city: string;
  // selectCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectCity: (e: SelectChangeEvent<HTMLSelectElement>) => void;
  disable: boolean;
  servicesCategories: string[];
}

interface iStatesList {
  id: number;
  nome: string;
  sigla: string;
  região: {
    id: number;
    nome: string;
    sigla: string;
  };
}

interface iCitiesList {
  id: number;
  nome: string;
  municipio: {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
        id: number;
        nome: string;
        UF: {
          id: number;
          nome: string;
          sigla: string;
          regiao: {
            id: number;
            nome: string;
            sigla: string;
          };
        };
      };
    };
    regiaoImediata: {
      id: number;
      nome: string;
      regiaoIntermediaria: {
        id: number;
        nome: string;
        UF: {
          id: number;
          nome: string;
          sigla: string;
          regiao: {
            id: number;
            nome: string;
            sigla: string;
          };
        };
      };
    };
  };
}

export const CitiesContext = createContext({} as iCitiesContext);

export const CitiesProvider = ({ children }: iDefaultPropsProvider) => {
  const [statesList, setStatesList] = useState<[] | iStatesList[]>([]);
  const [stateId, setStateId] = useState<number>(0);
  const [citiesList, setCitiesList] = useState<[] | iCitiesList[]>([]);
  const [city, setCity] = useState("" as string);
  const [disable, setDisable] = useState<boolean>(true);

  const servicesCategories = [
    "Eletricista",
    "Encanador",
    "Gás",
    "Janelas",
    "Jardim",
    "Marceneiro",
    "Pedreiro",
    "Piso",
    "Piscina",
    "Pintor",
    "Serralheiro",
    "Telhado",
  ];

  const CitiesAPI = axios.create({
    baseURL: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/distritos?orderBy=nome`,
    timeout: 5000,
  });

  const getStates = async () => {
    try {
      const states = await StatesAPI.get("");
      setStatesList(states.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const selectState = async (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectState = async (e: SelectChangeEvent<HTMLSelectElement>) => {
    setStateId(+e.target.value);
    try {
      if (e.target.value !== "0") {
        setDisable(false);
        const response = await CitiesAPI.get("");
        setCitiesList(response.data);
      } else {
        setDisable(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const selectCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectCity = (e: SelectChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value as string);
  };

  return (
    <CitiesContext.Provider
      value={{
        getStates,
        statesList,
        citiesList,
        selectState,
        city,
        selectCity,
        disable,
        servicesCategories,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
