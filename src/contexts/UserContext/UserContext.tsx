import { createContext, useState } from "react";
import { api } from "../../service/api";
import { iDefaultPropsProvider } from "../types";
import { useNavigate } from "react-router-dom";

interface iUserClientRegister {
  email: string;
  password: string;
  name: string;
  city: string;
  age: number;
  phone: string;
  type: string;
  avatar_URL: string;
}

interface iUserServiceRegister extends iUserClientRegister {
  workOnCities: [];
  workOnCategories: [];
  available: boolean;
}

interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserClient {
  email: string;
  name: string;
  age: number;
  city: string;
  phone: string;
  type: string;
  id: number;
  avatar_URL: string;
}

export interface iUserService extends iUserClient {
  workOnCities: [];
  workOnCategories: [];
  ratings: [];
  available: boolean;
}

interface iUserContext {
  userClient: iUserClient | null;
  userService: iUserService | null;
  userClientRegister: (data: iUserClientRegister) => void;
  userServiceRegister: (data: iUserServiceRegister) => void;
  userLogin: (data: iUserLogin) => void;
  userLogout: () => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultPropsProvider) => {
  const [userClient, setUserClient] = useState<iUserClient | null>(null);
  const [userService, setUserService] = useState<iUserService | null>(null);
  const navigate = useNavigate();

  const userClientRegister = async (data: iUserClientRegister) => {
    try {
      const response = await api.post("/register", data);
      setUserClient(response.data.user);
      localStorage.setItem("@Id:EazyHome", response.data.user.id);
      localStorage.setItem("@Token:EazyHome", response.data.acessToken);
      localStorage.setItem("@UserType:EazyHome", response.data.user.type);
      navigate("/dashboardclient");
    } catch (error) {
      console.log(error);
    }
  };

  const userServiceRegister = async (data: iUserServiceRegister) => {
    try {
      const response = await api.post("/register", data);
      setUserService(response.data.user);
      localStorage.setItem("@Id:EazyHome", response.data.user.id);
      localStorage.setItem("@Token:EazyHome", response.data.acessToken);
      localStorage.setItem("@UserType:EazyHome", response.data.user.type);
      navigate("/dashboardservice");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (data: iUserLogin) => {
    try {
      const response = await api.post("/login", data);
      const userService = response.data.user.type;
      localStorage.setItem("@Id:EazyHome", response.data.user.id);
      localStorage.setItem("@Token:EazyHome", response.data.acessToken);
      localStorage.setItem("@UserType:EazyHome", response.data.user.type);
      if (userService === "prestador") {
        setUserService(response.data.user);
        navigate("/dashboardservice");
      } else {
        setUserClient(response.data.user);
        navigate("/dashboardclient");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@Token:EazyHome");
    localStorage.removeItem("@Id:EazyHome");
    localStorage.removeItem("@UserType:EazyHome");
    setUserClient(null);
    setUserService(null);
  };

  return (
    <UserContext.Provider
      value={{
        userClient,
        userService,
        userClientRegister,
        userServiceRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
