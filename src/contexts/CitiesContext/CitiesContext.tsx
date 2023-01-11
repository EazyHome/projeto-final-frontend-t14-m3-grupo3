import React, { useState, createContext } from "react";
import { StatesAPI } from "../../service/statesApi";
import { iDefaultPropsProvider } from "../types";
import { SelectChangeEvent } from "@mui/material";

interface iCitiesContext {
  getStates: () => void;
  statesList: [] | iStatesList[];
  citiesList: [] | iCitiesList[];
  selectState: (e: SelectChangeEvent<string>) => void;
  disable: boolean;
  servicesCategories: iCategoriesList[];
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

interface iCategoriesList {
  value: string;
  name: string;
}

export const CitiesContext = createContext({} as iCitiesContext);

export const CitiesProvider = ({ children }: iDefaultPropsProvider) => {
  const [statesList, setStatesList] = useState<[] | iStatesList[]>([]);
  const [citiesList, setCitiesList] = useState<[] | iCitiesList[]>([]);
  const [disable, setDisable] = useState<boolean>(true);

  const servicesCategories = [
    { value: "Eletricista", name: "Eletricista" },
    { value: "Encanador", name: "Encanador" },
    { value: "Gás", name: "Gás" },
    { value: "Janelas", name: "Eletricista" },
    { value: "Jardim", name: "Jardim" },
    { value: "Marceneiro", name: "Marceneiro" },
    { value: "Pedreiro", name: "Pedreiro" },
    { value: "Piso", name: "Piso" },
    { value: "Piscina", name: "Piscina" },
    { value: "Pintor", name: "Pintor" },
    { value: "Serralheiro", name: "Serralheiro" },
    { value: "Telhado", name: "Telhado" },
  ];

  const getStates = async () => {
    try {
      const states = await StatesAPI.get("");
      setStatesList(states.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectState = async (e: SelectChangeEvent<string>) => {
    try {
      if (e.target.value !== "0") {
        setDisable(false);
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.target.value}/distritos?orderBy=nome`
        );
        setCitiesList(await response.json());
      } else {
        setDisable(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        getStates,
        statesList,
        citiesList,
        selectState,
        disable,
        servicesCategories,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
