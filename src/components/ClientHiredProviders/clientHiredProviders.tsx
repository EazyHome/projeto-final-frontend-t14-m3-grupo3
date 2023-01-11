import { HiredProviderList, NoItemsFound } from "./style";
import { useContext, useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import {
  iServices,
  ProfileContext,
} from "../../contexts/ProfileContext/ProfileContext";

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
    getProviders();
    console.log("Providers", providersList);
  }, []);

  useEffect(() => {
    getActiveServices();
    getDoneServices();
    getCanceledServices();
    console.log(activeServices);
  }, []);

  const getHiredServices = () => {
    console.log(activeServices);
    console.log(doneServices);
    console.log(canceledServices);
    const clientTotalServices = [
      ...filteredHiredServices,
      activeServices,
      doneServices,
      canceledServices,
    ];
    console.log(clientTotalServices);
    setFilteredHiredServices(clientTotalServices as iServices[]);
  };

  // getHiredServices();
  const clientTotalServices = [
    ...activeServices.reverse(),
    ...doneServices,
    ...canceledServices,
  ];
  console.log(clientTotalServices);
  // setFilteredHiredServices(clientTotalServices as iServices[]);
  // const isNotEmpty = clientTotalServices.length;

  const typeOfCard = "hiredProvidersList";

  return (
    <>
      {clientTotalServices.length > 0 ? (
        <>
          <HiredProviderList>
            {clientTotalServices.map((provider, index) => {
              console.log(index);
              const currentProvider = providersList.filter((prov) => {
                console.log(prov.id);
                console.log(provider.providerId === prov.id);
                return provider.providerId === prov.id;
              });
              console.log(currentProvider.length);
              return (
                currentProvider.length > 0 && (
                  <ServiceFeedCard
                    key={index}
                    typeOfCard={typeOfCard}
                    id={provider.providerId}
                    image={currentProvider[0].avatar_URL}
                    name={currentProvider[0].name}
                    category={provider.type}
                    status={provider.status}
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
                )
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
