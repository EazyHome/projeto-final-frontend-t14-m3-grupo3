import React, { useContext } from "react";
import { createContext, useState } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";
import { iDefaultPropsProvider } from "../types";
import {
  iUserClient,
  iUserService,
  UserContext,
} from "../UserContext/UserContext";
import { toast } from "react-toastify";
import { IData } from "../../components/ModalChangePassword/ModalChangePassword";

interface iProfileContext {
  isLogged: () => void;
  editProfile: (data: iUserClient | iUserService) => void;
  changeAvailability: () => void;
  getAvailability: () => void;
  availability: boolean;
  getDoneServices: () => void;
  doneServices: [] | iServices[];
  getActiveServices: () => void;
  activeServices: [] | iServices[];
  getCanceledServices: () => void;
  canceledServices: [] | iServices[];
  providersList: [] | iUserService[];
  getProviders: () => void;
  hireService: (data: iServices) => void;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  filterProviderByCategory: () => void;
  filteredProviders: [] | iUserService[];
  editPassword: (data: string) => void;
  cancelService: (id: number) => void;
  finishService: (data: iChangeService) => void;
  photo: string;
  getPhoto: () => void;
  filteredServices: [] | iServices[];
  setFilteredServices: React.Dispatch<React.SetStateAction<[] | iServices[]>>;
  setNeedChange: React.Dispatch<React.SetStateAction<boolean>>;
  changePassword: (data: IData) => void;
  clientsList: [] | iUserClient[];
  getClients: () => void;
  needChange: boolean;
  autoLogin: () => void;
}

export interface iServices {
  id: number;
  name: string;
  type: string;
  description: string;
  serviceCity: string;
  serviceState: string;
  userId: number;
  status: string;
  providerId: number;
  createdAt: string;
  rating?: number;
  // user: iUserClient;
}

interface iChangeService {
  id: number;
  rating: number;
}

export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: iDefaultPropsProvider) => {
  const [doneServices, setDoneServices] = useState<[] | iServices[]>([]);
  const [activeServices, setActiveServices] = useState<[] | iServices[]>([]);
  const [canceledServices, setCanceledServices] = useState<[] | iServices[]>(
    []
  );
  const [availability, setAvailability] = useState<boolean>(true);
  const [providersList, setProvidersList] = useState<[] | iUserService[]>([]);
  const [category, setCategory] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [filteredProviders, setFilteredProviders] = useState<
    [] | iUserService[]
  >([]);
  const [needChange, setNeedChange] = useState<boolean>(false);
  const [clientsList, setClientsList] = useState([]);
  const navigate = useNavigate();
  const userCity = localStorage.getItem("@UserCity:EazyHome");
  const { userLogout } = useContext(UserContext);
  const [filteredServices, setFilteredServices] = useState<[] | iServices[]>(
    []
  );

  const isLogged = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.get(
        `/users/${localStorage.getItem("@Id:EazyHome")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
    } catch (error) {
      navigate("/");
    }
  };

  const autoLogin = async () => {
    const token = localStorage.getItem("@Token:EazyHome");
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = api.get(`/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (localStorage.getItem("@UserType:EazyHome") === "cliente") {
        navigate("/dashboardcliente");
      } else {
        navigate("/dashboardservice");
      }
    } catch (error) {
      toast.error("Seu login expirou! Faça login novamente.");
      userLogout();
      navigate("/login");
    }
  };

  const changePassword = async (data: IData) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.patch(
        `users/${localStorage.getItem("@Id:EazyHome")}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editProfile = async (data: iUserClient | iUserService) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.patch(
        `/users/${localStorage.getItem("@Id:EazyHome")}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editPassword = async (data: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.patch(
        `/users/${localStorage.getItem("@Id:EazyHome")}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getAvailability = async () => {
    try {
      const response = await api.get(
        `/users/${localStorage.getItem("@Id:EazyHome")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
      setAvailability(response.data.available);
    } catch (error) {
      console.log(error);
    }
  };

  const changeAvailability = async () => {
    const availability = await api
      .get(`users/${localStorage.getItem("@Id:EazyHome")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
        },
      })
      .then((availability) => availability.data.available);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.patch(
        `/users/${localStorage.getItem("@Id:EazyHome")}`,
        !availability,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getDoneServices = async () => {
    try {
      if (localStorage.getItem("@UserType:EazyHome") === "cliente") {
        const response = await api.get(
          `/services?userId=${localStorage.getItem(
            "@Id:EazyHome"
          )}&status=done`,
          {
            headers: {
              Authorization: `Bearer ${"@Token:EazyHome"}`,
            },
          }
        );
        setDoneServices(response.data);
      } else {
        const response = await api.get(
          `/services?providerId=${localStorage.getItem(
            "@Id:EazyHome"
          )}&status=done`,
          {
            headers: {
              Authorization: `Bearer ${"@Token:EazyHome"}`,
            },
          }
        );
        setDoneServices(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getActiveServices = async () => {
    try {
      if (localStorage.getItem("@UserType:EazyHome") === "cliente") {
        const response = await api.get(
          `/services?userId=${localStorage.getItem(
            "@Id:EazyHome"
          )}&status=active`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "@Token:EazyHome"
              )}`,
            },
          }
        );
        setActiveServices(response.data);
      } else {
        const response = await api.get(
          `/services?providerId=${localStorage.getItem(
            "@Id:EazyHome"
          )}&status=active`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "@Token:EazyHome"
              )}`,
            },
          }
        );
        setActiveServices(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCanceledServices = async () => {
    try {
      if (localStorage.getItem("@UserType:EazyHome") === "cliente") {
        const response = await api.get(
          `/services?userId=${localStorage.getItem(
            "@Id:EazyHome"
          )}&status=canceled`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "@Token:EazyHome"
              )}`,
            },
          }
        );
        setCanceledServices(response.data);
      } else {
        const response = await api.get(
          `/services?providerId=${localStorage.getItem(
            "@Id:EazyHome"
          )}&status=canceled`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "@Token:EazyHome"
              )}`,
            },
          }
        );
        setCanceledServices(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProviders = async () => {
    try {
      const response = await api.get(`/users?type=prestador&available=true`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
        },
      });
      if (localStorage.getItem("@UserCity:EazyHome") !== null) {
        setProvidersList(
          response.data.filter((e: iUserService) =>
            e.workOnCities.includes(userCity as string)
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hireService = async (data: iServices) => {
    try {
      const response = await api.post(`/services`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
        },
      });
      setNeedChange(true);
      setActiveServices([...activeServices, response.data]);
      setNeedChange(true);
      toast.success(`Contratação efetuada com sucesso!`);
    } catch (error) {
      console.log(error);
      toast.error(`Ops! Algo deu errado`);
    }
  };

  const filterProviderByCategory = () => {
    setFilteredProviders(
      providersList.filter((e) => e.workOnCategories.includes(category))
    );
  };

  const finishService = async (data: iChangeService) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.patch(
        `services/${data.id}`,
        { status: "done", rating: data.rating },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
      setNeedChange(true);
      toast.success(`Serviço concluído com sucesso!`);
    } catch (error) {
      console.log(error);
      toast.error(`Ops! Algo deu errado`);
    }
  };

  const cancelService = async (id: number) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.patch(
        `services/${id}`,
        { status: "canceled", rating: -1 },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
      setNeedChange(true);
      toast.success(`Serviço cancelado com sucesso!`);
    } catch (error) {
      console.log(error);
      toast.error(`Ops! Algo deu errado`);
    }
  };

  const getPhoto = async () => {
    try {
      const response = await api.get(
        `users/${localStorage.getItem("@Id:EazyHome")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        }
      );
      setPhoto(response.data.avatar_URL);
    } catch (error) {
      console.log(error);
    }
  };

  const getClients = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.get(`/users?type=cliente`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
        },
      });
      setClientsList(response.data);
      return [];
    } catch (error) {
      navigate("/");
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        isLogged,
        autoLogin,
        editProfile,
        changeAvailability,
        getAvailability,
        availability,
        getDoneServices,
        doneServices,
        getActiveServices,
        activeServices,
        getCanceledServices,
        canceledServices,
        providersList,
        getProviders,
        hireService,
        category,
        setCategory,
        filterProviderByCategory,
        filteredProviders,
        editPassword,
        cancelService,
        finishService,
        photo,
        getPhoto,
        filteredServices,
        setFilteredServices,
        needChange,
        setNeedChange,
        changePassword,
        clientsList,
        getClients,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
