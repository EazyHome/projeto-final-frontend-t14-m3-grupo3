import { HiredProviderList, NoItemsFound } from "./style";
import { useContext, useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import {
  iServices,
  ProfileContext,
} from "../../contexts/ProfileContext/ProfileContext";

export const ClientHiredProvidersFeedList = () => {
  const {
    activeServices,
    getActiveServices,
    doneServices,
    getDoneServices,
    canceledServices,
    getCanceledServices,
    providersList,
    getProviders,
    needChange,
    setNeedChange,
  } = useContext(ProfileContext);

  useEffect(() => {
    getProviders();
    setNeedChange(false);
  }, []);

  useEffect(() => {
    getActiveServices();
    getDoneServices();
    getCanceledServices();
  }, [needChange]);

  let clientTotalServices = [] as iServices[];
  clientTotalServices = [
    ...activeServices.reverse(),
    ...doneServices.reverse(),
    ...canceledServices.reverse(),
  ];
  const typeOfCard = "hiredProvidersList";

  return (
    <>
      {clientTotalServices.length > 0 ? (
        <>
          <HiredProviderList>
            {clientTotalServices.map((provider, index) => {
              const currentProvider = providersList.filter((prov) => {
                return provider.providerId === prov.id;
              });
              return (
                currentProvider.length > 0 && (
                  <ServiceFeedCard
                    key={index}
                    typeOfCard={typeOfCard}
                    id={provider.id}
                    image={currentProvider[0].avatar_URL}
                    name={currentProvider[0].name}
                    category={provider.type}
                    status={provider.status}
                    phone={currentProvider[0].phone}
                    email={currentProvider[0].email}
                    age={currentProvider[0].age}
                    rating={Number(provider.rating)}
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
