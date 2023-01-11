import { ProviderList, NoItemsFound } from "./style";
import { useContext, useEffect, useState } from "react";
import { ServiceFeedCard } from "../ServiceFeedCard/serviceFeedCard";
import defaultProvider from "../../assets/img/fornecedor.png";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";

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

export const ClientProvidersFeedList = () => {
  // const [filteredProviders, setFilteredProviders] = useState(
  //   [] as iClientServiceFeed[]
  // );

  const { category, filterProviderByCategory, filteredProviders } =
    useContext(ProfileContext);

  useEffect(() => {
    filterProviderByCategory();
  }, [category]);

  // const initialProviders = [
  //   {
  //     id: 1,
  //     image: defaultProvider,
  //     name: "Fornecedor 1",
  //     category: "MARCENEIRO",
  //     phone: "(11) 99999.9999",
  //     email: "fornecedor1@mail.com",
  //     age: 30,
  //     rating: 2,
  //   },
  //   {
  //     id: 2,
  //     image: defaultProvider,
  //     name: "Fornecedor 2",
  //     category: "ENCANADOR",
  //     phone: "(11) 99999.9998",
  //     email: "fornecedor2@mail.com",
  //     age: 31,
  //     rating: 5,
  //   },
  //   {
  //     id: 3,
  //     image: defaultProvider,
  //     name: "Fornecedor 3",
  //     category: "ENCANADOR",
  //     phone: "(11) 99999.9997",
  //     email: "fornecedor3@mail.com",
  //     age: 32,
  //     rating: 3,
  //   },
  // ];

  // useEffect(() => {
  //   setFilteredProviders(initialProviders);
  // }, []);

  const isNotEmpty = filteredProviders.length;
  const typeOfCard = "providersList";
  const tempImage = defaultProvider;

  const roundRating = (number: number) => {
    const pow = Math.pow(10, 1);
    return Math.round(number * pow) / pow;
  };

  return (
    <>
      {isNotEmpty ? (
        <>
          <ProviderList>
            {filteredProviders.map((provider, index) => (
              <ServiceFeedCard
                key={index}
                typeOfCard={typeOfCard}
                id={provider.id}
                image={tempImage}
                name={provider.name}
                category={category}
                phone={provider.phone}
                email={provider.email}
                age={provider.age}
                rating={roundRating(
                  provider.ratings.reduce(
                    (accumulator, value) => accumulator + value,
                    0
                  ) / provider.ratings.length
                )}
              />
            ))}
          </ProviderList>
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
