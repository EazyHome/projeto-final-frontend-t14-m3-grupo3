import React, { useState, createContext } from "react";
import { StatesAPI } from "../../service/CitiesApi";
import { iDefaultPropsProvider } from "../types";
import axios from "axios";

interface iCitiesContext {
  getCities: () => void;
  statesList: [] | iStatesList[];
  citiesList: [] | iCitiesList[];
  selectState: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  city: string;
  selectCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disable: boolean;
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
  const [city, setCity] = useState("");
  const [disable, setDisable] = useState<boolean>(true);

  const CitiesAPI = axios.create({
    baseURL: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/distritos?orderBy=nome`,
    timeout: 5000,
  });

  const getCities = async () => {
    try {
      const states = await StatesAPI.get("");
      setStatesList(states.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectState = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStateId(+e.target.value);
    if (e.target.value !== "0") {
      setDisable(false);
      const response = await CitiesAPI.get("");
      setCitiesList(response.data);
    } else {
      setDisable(true);
    }
  };

  const selectCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <CitiesContext.Provider
      value={{
        getCities,
        statesList,
        citiesList,
        selectState,
        city,
        selectCity,
        disable,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};