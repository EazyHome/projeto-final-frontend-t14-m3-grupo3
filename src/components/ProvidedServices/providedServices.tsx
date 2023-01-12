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
import { iUserClient } from "../../contexts/UserContext/UserContext";

export const ProvidedServicesFeedList = () => {
  const {
    activeServices,
    getActiveServices,
    doneServices,
    getDoneServices,
    canceledServices,
    getCanceledServices,
    clientsList,
    getClients,
  } = useContext(ProfileContext);

  const [filteredProvidedServices, setFilteredProvidedServices] = useState(
    [] as iServices[]
  );

  useEffect(() => {
    getActiveServices();
    getDoneServices();
    getCanceledServices();
    getClients();

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

              const client = clientsList.find((e) => e.id === provider.id);

              return (
                <ServiceFeedCard
                  key={index}
                  typeOfCard={typeOfCard}
                  id={provider.id}
                  image={client ? client.avatar_URL : ""}
                  name={client ? client.name : ""}
                  city={provider.serviceCity}
                  state={provider.serviceState}
                  status={provider.status}
                  phone={client ? client.phone : ""}
                  email={client ? client.email : ""}
                  rating={provider.rating ? provider.rating : 0}
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
