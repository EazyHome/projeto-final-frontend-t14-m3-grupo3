import { ProvidedServiceList, NoItemsFound } from "./style";
import { useContext, useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import defaultClient from "../../assets/img/cliente.png";
import {
  ProfileContext,
  ProfileProvider,
  iServices,
} from "../../contexts/ProfileContext/ProfileContext";
import eletricista from "../../../assets/img/eletricista.png";

export const ProvidedServicesFeedList = () => {
  const {
    activeServices,
    getActiveServices,
    doneServices,
    getDoneServices,
    canceledServices,
    getCanceledServices,
  } = useContext(ProfileContext);

  const [filteredProvidedServices, setFilteredProvidedServices] = useState(
    [] as iServices[]
  );

  useEffect(() => {
    getActiveServices();
    getDoneServices();
    getCanceledServices();
    setFilteredProvidedServices([
      ...activeServices,
      ...doneServices,
      ...canceledServices,
    ]);
    console.log("chegou aqui");
    console.log("activeService", activeServices);
    console.log("doneService", doneServices);
    console.log("canceledService", canceledServices);
  }, []);

  const isEmpty = filteredProvidedServices.length;
  const typeOfCard = "serviceProvided";
  const tempImage = defaultClient;

  return (
    <>
      {isEmpty ? (
        <>
          <ProvidedServiceList>
            {filteredProvidedServices.map((provider, index) => {
              console.log(provider);

              return (
                <ServiceFeedCard
                  key={index}
                  typeOfCard={typeOfCard}
                  id={provider.id}
                  image={provider.user.avatar_URL}
                  name={provider.user.name}
                  city={provider.serviceCity}
                  state={provider.serviceState}
                  status={provider.status}
                  phone={provider.user.phone}
                  email={provider.user.email}
                  rating={5}
                  date={provider.createdAt}
                  description={provider.description}
                />
              );
            })}
          </ProvidedServiceList>
        </>
      ) : (
        <NoItemsFound>
          <span>Não há serviços prestados..</span>
        </NoItemsFound>
      )}
    </>
  );
};
