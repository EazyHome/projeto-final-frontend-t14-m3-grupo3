import { HiredProviderList, NoItemsFound } from "./style";
import { useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import defaultProvider from "../../assets/img/fornecedor.png";

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
  const [filteredHiredProviders, setFilteredHiredProviders] = useState(
    [] as iClientServiceFeed[]
  );

  const initialHiredProviders = [
    {
      id: 1,
      image: defaultProvider,
      name: "Fornecedor 1",
      category: "MARCENEIRO",
      status: "CONCLUÍDO",
      phone: "(11) 99999.9999",
      email: "fornecedor1@mail.com",
      age: 30,
      rating: 2,
      date: "09/01/2023",
      description: "Armário da cozinha"
    },
    {
      id: 1,
      image: defaultProvider,
      name: "Fornecedor 1",
      category: "MARCENEIRO",
      status: "CONCLUÍDO",
      phone: "(11) 99999.9999",
      email: "fornecedor1@mail.com",
      age: 30,
      rating: 4.5,
      date: "09/01/2023",
      description: "Armário da cozinha"
    },
    {
      id: 2,
      image: defaultProvider,
      name: "Fornecedor 2",
      category: "ENCANADOR",
      status: "EM ANDAMENTO",
      phone: "(11) 99999.9998",
      email: "fornecedor2@mail.com",
      age: 31,
      rating: 99,
      date: "08/01/2023",
      description: "Vazamento na cozinha",
    },
    {
      id: 3,
      image: defaultProvider,
      name: "Fornecedor 3",
      category: "ENCANADOR",
      status: "EM ANDAMENTO",
      phone: "(11) 99999.9997",
      email: "fornecedor3@mail.com",
      age: 32,
      rating: 99,
      date: "07/01/2023",
      description: "Vazamento na suite",
    },
    {
    id: 3,
    image: defaultProvider,
    name: "Fornecedor 3",
    category: "ENCANADOR",
    status: "CANCELADO",
    phone: "(11) 99999.9997",
    email: "fornecedor3@mail.com",
    age: 32,
    rating: -1,
    date: "07/01/2023",
    description: "Vazamento na suite"
  },
];

  useEffect(() => {
    setFilteredHiredProviders(initialHiredProviders);
  }, []);

  const isEmpty = filteredHiredProviders.length;
  const typeOfCard = "hiredProvidersList";

  return (
    <>
      {isEmpty ? (
        <>
          <HiredProviderList>
            {filteredHiredProviders.map((provider, index) => (
              <ServiceFeedCard
                key={index}
                typeOfCard={typeOfCard}
                id={provider.id}
                image={provider.image}
                name={provider.name}
                category={provider.category}
                status={provider.status}
                phone={provider.phone}
                email={provider.email}
                age={provider.age}
                rating={provider.rating}
                date={provider.date}
                description={provider.description}
              />
            ))}
          </HiredProviderList>
        </>
      ) : (
        <NoItemsFound>
          <span>
            Nenhum serviço contratado.
          </span>
        </NoItemsFound>
      )}
    </>
  );
};
