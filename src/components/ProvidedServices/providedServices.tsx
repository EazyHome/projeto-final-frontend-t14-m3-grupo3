import { ProvidedServiceList, NoItemsFound } from "./style";
import { useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import defaultClient from "../../assets/img/cliente.png";

interface iClientServiceFeed {
  id: number;
  image: string;
  name: string;
  city: string;
  state: string;
  status: string;
  phone: string;
  email: string;
  rating: number;
  date: string;
  description: string;
}

export const ProvidedServicesFeedList = () => {
  const [filteredProvidedServices, setFilteredProvidedServices] = useState(
    [] as iClientServiceFeed[]
  );

  const initialProvidedServices = [
    {
      id: 1,
      image: defaultClient,
      name: "Cliente 1",
      city: "Rio de Janeiro",
      state: "RJ",
      status: "CONCLUÍDO",
      phone: "(11) 99999.9999",
      email: "cliente1@mail.com",
      age: 30,
      rating: 2,
      date: "09/01/2023",
      description: "Armário da cozinha"
    },
    {
      id: 1,
      image: defaultClient,
      name: "Cliente 1",
      city: "Rio de Janeiro",
      state: "RJ",
      status: "CONCLUÍDO",
      phone: "(11) 99999.9999",
      email: "cliente1@mail.com",
      age: 30,
      rating: 4.5,
      date: "09/01/2023",
      description: "Armário da cozinha"
    },
    {
      id: 2,
      image: defaultClient,
      name: "Cliente 2",
      city: "Rio de Janeiro",
      state: "RJ",
      status: "EM ANDAMENTO",
      phone: "(11) 99999.9998",
      email: "cliente2@mail.com",
      age: 31,
      rating: 99,
      date: "08/01/2023",
      description: "Vazamento na cozinha",
    },
    {
      id: 3,
      image: defaultClient,
      name: "Cliente 3",
      city: "Rio de Janeiro",
      state: "RJ",
      status: "EM ANDAMENTO",
      phone: "(11) 99999.9997",
      email: "cliente3@mail.com",
      age: 32,
      rating: 99,
      date: "07/01/2023",
      description: "Vazamento na suite",
    },
    {
    id: 3,
    image: defaultClient,
    name: "Cliente 3",
    city: "Rio de Janeiro",
    state: "RJ",
    status: "CANCELADO",
    phone: "(11) 99999.9997",
    email: "cliente4@mail.com",
    age: 32,
    rating: -1,
    date: "07/01/2023",
    description: "Vazamento na suite"
  },
];

  useEffect(() => {
    setFilteredProvidedServices(initialProvidedServices);
  }, []);

  const isEmpty = filteredProvidedServices.length;
  const typeOfCard = "serviceProvided";

  return (
    <>
      {isEmpty ? (
        <>
          <ProvidedServiceList>
            {filteredProvidedServices.map((provider, index) => (
              <ServiceFeedCard
                key={index}
                typeOfCard={typeOfCard}
                id={provider.id}
                image={provider.image}
                name={provider.name}
                city={provider.city}
                state={provider.state}
                status={provider.status}
                phone={provider.phone}
                email={provider.email}
                rating={provider.rating}
                date={provider.date}
                description={provider.description}
              />
            ))}
          </ProvidedServiceList>
        </>
      ) : (
        <NoItemsFound>
          <span>
            Não há serviços prestados..
          </span>
        </NoItemsFound>
      )}
    </>
  );
};
