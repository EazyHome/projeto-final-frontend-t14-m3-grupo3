import { CitiesProvider } from "./CitiesContext/citiesContext";
import { UserProvider } from "./UserContext/userContext";
import { ProfileProvider } from "./ProfileContext/profileContext";
import { iDefaultPropsProvider } from "./types";

export const Providers = ({ children }: iDefaultPropsProvider) => {
  return (
    <CitiesProvider>
      <UserProvider>
        <ProfileProvider>{children}</ProfileProvider>
      </UserProvider>
    </CitiesProvider>
  );
};
