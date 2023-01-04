import { createContext, useContext, useState } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { iDefaultPropsProvider } from "../types";
import {
  iUserClient,
  iUserService,
  UserContext,
} from "../UserContext/UserContext";

interface iProfileContext {
  isLogged: () => void;
  editProfile: (data: iUserClient | iUserService) => void;
  changeAvailability: () => void;
  getAvailability: () => void;
  availability: boolean;
  getDoneServices: () => void;
  doneServices: [] | iServices;
  getActiveServices: () => void;
  activeServices: [] | iServices;
}

interface iServices {
  id: number;
  name: string;
  type: string;
  description: string;
  serviceCity: string;
  userId: number;
  providerId: number;
  avatar_URL: string;
}

export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: iDefaultPropsProvider) => {
  const [doneServices, setDoneServices] = useState<[] | iServices>([]);
  const [activeServices, setActiveServices] = useState<[] | iServices>([]);
  const [availability, setAvailability] = useState<boolean>(true);
  const navigate = useNavigate();
  const { userService } = useContext(UserContext);

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
      navigate("/home");
    }
  };

  const editProfile = async (data: iUserClient | iUserService) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.patch(
        `/users/${localStorage.getItem("@Id:EazyHome")}`,
        data
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
      setAvailability(response.data.user.available);
    } catch (error) {
      console.log(error);
    }
  };

  const changeAvailability = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.patch(
        `/users/${localStorage.getItem("@Id:EazyHome")}`,
        !userService?.available
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getDoneServices = async () => {
    try {
      if (localStorage.getItem("@UserType:EazyHome") === "cliente") {
        const response = await api.get(
          `/doneServices?userId=${localStorage.getItem("@Id:EazyHome")}`
        );
        setDoneServices(response.data);
      } else {
        const response = await api.get(
          `/doneServices?providerId=${localStorage.getItem("@Id:EazyHome")}`
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
          `/activeServices?userId=${localStorage.getItem("@Id:EazyHome")}`
        );
        setActiveServices(response.data);
      } else {
        const response = await api.get(
          `/activeServices?providerId=${localStorage.getItem("@Id:EazyHome")}`
        );
        setActiveServices(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        isLogged,
        editProfile,
        changeAvailability,
        getAvailability,
        availability,
        getDoneServices,
        doneServices,
        getActiveServices,
        activeServices,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
