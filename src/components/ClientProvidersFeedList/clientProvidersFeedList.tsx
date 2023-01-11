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
  const { category, filterProviderByCategory, filteredProviders } =
    useContext(ProfileContext);

  useEffect(() => {
    filterProviderByCategory();
    console.log(category, filteredProviders);
  }, [category]);

  const isNotEmpty = filteredProviders.length;
  const typeOfCard = "providersList";
  const tempImage = defaultProvider;

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
                rating={
                  provider.ratings.reduce(
                    (accumulator, value) => accumulator + value,
                    0
                  ) / provider.ratings.length
                }
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
