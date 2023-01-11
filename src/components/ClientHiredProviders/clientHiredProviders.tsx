import { HiredProviderList, NoItemsFound } from "./style";
import { useContext, useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import defaultProvider from "../../assets/img/fornecedor.png";
import {
  iServices,
  ProfileContext,
} from "../../contexts/ProfileContext/ProfileContext";
import {
  iUserService,
  UserContext,
} from "../../contexts/UserContext/UserContext";

interface iClientServiceFeed {
  id: number;
  image: string;
  name: string;
  category: string;
  status: string;
  phone: string;
  email: string;
  age: number;
  rating: number;
  date: string;
  description: string;
}

export const ClientHiredProvidersFeedList = () => {
  const [filteredHiredServices, setFilteredHiredServices] = useState(
    [] as iServices[]
  );

  const {
    activeServices,
    getActiveServices,
    doneServices,
    getDoneServices,
    canceledServices,
    getCanceledServices,
    providersList,
    getProviders,
  } = useContext(ProfileContext);

  useEffect(() => {
    getActiveServices();
    getDoneServices();
    getCanceledServices();
    getProviders();
  }, []);

  const getHiredServices = () => {
    const clientId = Number(localStorage.getItem("@Id:EazyHome"));
    const clientActiveServices = activeServices.filter(
      (service) => service.userId === clientId
    );
    const clientDoneServices = activeServices.filter(
      (service) => service.userId === clientId
    );
    const clientCanceledServices = activeServices.filter(
      (service) => service.userId === clientId
    );
    const clientTotalServices = [
      ...filteredHiredServices,
      clientActiveServices,
      clientDoneServices,
      clientCanceledServices,
    ];
    setFilteredHiredServices(clientTotalServices as iServices[]);
  };

  const isEmpty = filteredHiredServices.length;
  const typeOfCard = "hiredProvidersList";

  return (
    <>
      {isEmpty ? (
        <>
          <HiredProviderList>
            {filteredHiredServices.map((provider, index) => {
              const currentProvider = providersList.filter(
                (prov) => provider.providerId === prov.id
              );
              return (
                <ServiceFeedCard
                  key={index}
                  typeOfCard={typeOfCard}
                  id={provider.providerId}
                  image={currentProvider[0].avatar_URL}
                  name={provider.user.name}
                  category={provider.type}
                  // status={provider.status}
                  status={""}
                  phone={currentProvider[0].phone}
                  email={currentProvider[0].email}
                  age={currentProvider[0].age}
                  rating={
                    currentProvider[0].ratings.reduce(
                      (accumulator, value) => accumulator + value,
                      0
                    ) / currentProvider[0].ratings.length
                  }
                  date={provider.createdAt}
                  description={provider.description}
                />
              );
            })}
          </HiredProviderList>
        </>
      ) : (
        <NoItemsFound>
          <span>Nenhum serviço contratado.</span>
        </NoItemsFound>
      )}
    </>
  );
};
