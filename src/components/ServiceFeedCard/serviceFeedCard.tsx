import {
  FeedItem,
  FeedItemBody,
  FeedItemHeader,
  FeedItemImage,
  FeedItemTitle,
  FeedRating,
} from "./style";

interface iServiceFeed {
  typeOfCard: string;
  id?: number;
  image?: string;
  name?: string;
  date?: string;
  city?: string;
  state?: string;
  category?: string;
  phone?: string;
  email?: string;
  age?: number;
  status?: string;
  rating: number;
  description?: string;
}

export const ServiceFeedCard = ({
  typeOfCard,
  id,
  image,
  name,
  date,
  city,
  state,
  category,
  phone,
  email,
  age,
  status,
  rating,
  description,
}: iServiceFeed) => {
  let colorOfCard = "negative";
  if (rating === 0) {
    colorOfCard = "tertiary";
  } else if (rating >= 2.5) {
    colorOfCard = "opposite";
  } else if (rating >= 0 && rating < 2.5) {
    colorOfCard = "primary";
  }
  console.log(colorOfCard);
  return (
    <>
      <FeedItem colorOfCardFeed={colorOfCard}>
        <FeedItemImage>
          <img src={image} alt="foto" />
        </FeedItemImage>

        <FeedItemBody>
          <FeedItemHeader colorOfCardFeed={colorOfCard}>
            <span>{typeOfCard !== "serviceProvided" ? category : name}</span>
            <FeedRating>
              <span>
                {status === "EM ANDAMENTO" && status}
                {status === "CONCLUÍDO" && `AVALIAÇÃO: ${rating}/5`}
                {status === "CANCELADO" && rating === -1 && "CANCELADO"}
                {!status && `AVALIAÇÃO: ${rating}/5`}
              </span>
            </FeedRating>
          </FeedItemHeader>
          <FeedItemTitle>
            <div>
              {typeOfCard !== "serviceProvided"
                ? `Profissional: ${name}`
                : `Cidade: ${city} - ${state}`}
            </div>
            <div>{typeOfCard !== "providersList" && `Data: ${date}`}</div>
          </FeedItemTitle>
          <div>{`Telefone: ${phone}`}</div>
          <div>{`E-mail: ${email}`}</div>
          <div>
            {typeOfCard === "providersList"
              ? `Idade: ${age}`
              : `Descrição: ${description}`}
          </div>
        </FeedItemBody>
      </FeedItem>
      {/* ___ CONDICOES DE TESTE DO COMPONENTE DOS CARDS ___ */}
      {/* <ProfileProvider>
        <ServiceFeedCard
          typeOfCard={"serviceProvided"}
          id={0}
          image={defaultClient}
          name={"FULANO"}
          date={"07/01/2023"}
          city={"Rio de Janeiro"}
          state={"RJ"}
          category={"MARCENEIRO"}
          phone={"(21) 99999.9990"}
          email={"fulano@mail.com"}
          age={30}
          status={"EM ANDAMENTO"}
          rating={0}
          description={"Armário da cozinha"}
        />
        <ServiceFeedCard
          typeOfCard={"serviceProvided"}
          id={0}
          image={defaultClient}
          name={"FULANO"}
          date={"07/01/2023"}
          city={"Rio de Janeiro"}
          state={"RJ"}
          category={"MARCENEIRO"}
          phone={"(21) 99999.9990"}
          email={"fulano@mail.com"}
          age={30}
          status={"CANCELADO"}
          rating={-1}
          description={"Armário da cozinha"}
        />
        <ServiceFeedCard
          typeOfCard={"hiredByClient"}
          id={0}
          image={defaultProvider}
          name={"Prestador Fulano1"}
          date={"07/01/2023"}
          city={"Rio de Janeiro"}
          state={"RJ"}
          category={"MARCENEIRO"}
          phone={"(21) 99999.9995"}
          email={"fulano1@mail.com"}
          age={30}
          status={"CONCLUÍDO"}
          rating={5}
          description={"Armário da cozinha"}
        />
        <ServiceFeedCard
          typeOfCard={"providersList"}
          id={0}
          image={defaultProvider}
          name={"Prestador Fulano2"}
          date={"07/01/2023"}
          city={"Rio de Janeiro"}
          state={"RJ"}
          category={"MARCENEIRO"}
          phone={"(21) 99999.9910"}
          email={"fulano2@mail.com"}
          age={30}
          status={"CONCLUÍDO"}
          rating={2.3}
          description={"Armário da cozinha"}
        />
        <ServiceFeedCard
          typeOfCard={"providersList"}
          id={0}
          image={defaultProvider}
          name={"Prestador Fulano2"}
          date={"07/01/2023"}
          city={"Rio de Janeiro"}
          state={"RJ"}
          category={"MARCENEIRO"}
          phone={"(21) 99999.9910"}
          email={"fulano2@mail.com"}
          age={30}
          status={"AVALIAÇÃO"}
          rating={-1}
          description={"Armário da cozinha"}
        />
      </ProfileProvider> */}
    </>
  );
};
