import { createContext, useState } from "react";
import { api } from "../../service/api";
import { iDefaultPropsProvider } from "./types";
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
  avaiable: boolean;
}

interface iUserLogin {
  email: string;
  password: string;
}

interface iUserClient {
  email: string;
  name: string;
  age: number;
  city: string;
  phone: string;
  type: string;
  id: number;
  avatar_URL: string;
}

interface iUserService extends iUserClient {
  workOnCities: [];
  workOnCategories: [];
  ratings: [];
  avaiable: boolean;
}

interface iUserContext {
  user: iUserClient | iUserService | null;
  userClientRegister: (data: iUserClientRegister) => void;
  userServiceRegister: (data: iUserServiceRegister) => void;
  userLogin: (data: iUserLogin) => void;
  userLogout: () => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultPropsProvider) => {
  const [user, setUser] = useState<iUserClient | iUserService | null>(null);
  const navigate = useNavigate();

  const userClientRegister = async (data: iUserClientRegister) => {
    try {
      const response = await api.post("/register", data);
      setUser(response.data.user);
      localStorage.setItem("@Token:EazyHome", response.data.acessToken);
      navigate("/dashboardclient");
    } catch (error) {
      console.log(error);
    }
  };

  const userServiceRegister = async (data: iUserServiceRegister) => {
    try {
      const response = await api.post("/register", data);
      setUser(response.data.user);
      localStorage.setItem("@Token:EazyHome", response.data.acessToken);
      navigate("/dashboardservice");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (data: iUserLogin) => {
    try {
      const response = await api.post("/login", data);
      const userService = response.data.user.type;
      setUser(response.data.user);
      localStorage.setItem("@Token:EazyHome", response.data.acessToken);
      if (userService === "prestador") {
        navigate("/dashboardservice");
      } else {
        navigate("/dashboardclient");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@Token:EazyHome");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
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
