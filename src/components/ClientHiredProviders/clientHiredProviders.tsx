import { HiredProviderList, NoItemsFound } from "./style";
import { useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import defaultProvider from "../../assets/img/fornecedor.png";

interface iClientServiceFeed {
  id: number;
  image: string;
  name: string;
  category: string;
  phone: string;
  email: string;
  age: number;
  rating: number;
}

export const ClientHiredProvidersFeedList = () => {
  const [filteredProviders, setFilteredProviders] = useState(
    [] as iClientServiceFeed[]
  );

  const initialHiredProviders = [
    {
      id: 1,
      image: defaultProvider,
      name: "Fornecedor 1",
      category: "MARCENEIRO",
      phone: "(11) 99999.9999",
      email: "fornecedor1@mail.com",
      age: 30,
      rating: 2,
    },
    {
      id: 2,
      image: defaultProvider,
      name: "Fornecedor 2",
      category: "ENCANADOR",
      phone: "(11) 99999.9998",
      email: "fornecedor2@mail.com",
      age: 31,
      rating: 5,
    },
    {
      id: 3,
      image: defaultProvider,
      name: "Fornecedor 3",
      category: "ENCANADOR",
      phone: "(11) 99999.9997",
      email: "fornecedor3@mail.com",
      age: 32,
      rating: 3,
    },
  ];

  useEffect(() => {
    setFilteredProviders(initialHiredProviders);
  }, []);

  const isEmpty = filteredProviders.length;
  const typeOfCard = "hiredProvidersList";

  return (
    <>
      {isEmpty ? (
        <>
          <HiredProviderList>
            {filteredProviders.map((provider, index) => (
              <ServiceFeedCard
                key={index}
                typeOfCard={typeOfCard}
                id={provider.id}
                image={provider.image}
                name={provider.name}
                category={provider.category}
                phone={provider.phone}
                email={provider.email}
                age={provider.age}
                rating={provider.rating}
              />
            ))}
          </HiredProviderList>
        </>
      ) : (
        <NoItemsFound>
          <span>
            Não há prestadores de serviço cadastrados para a sua região...
          </span>
        </NoItemsFound>
      )}
    </>
  );
};
