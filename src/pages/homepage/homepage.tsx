import { NavHome } from "../../components/NavHome/navBar";
import eletricista from "../../assets/img/eletricista.png";
import encanador from "../../assets/img/encanador.png";
import gas from "../../assets/img/gás.png";
import janelas from "../../assets/img/janelas.png";
import jardim from "../../assets/img/jardineiro.png";
import telhado from "../../assets/img/ManutencaoDeTelhado.png";
import marceneiro from "../../assets/img/marceneiro.png";
import pedreiro from "../../assets/img/pedreiro.png";
import pintor from "../../assets/img/pintor.png";
import piscina from "../../assets/img/piscina.png";
import piso from "../../assets/img/piso.png";
import serralheiro from "../../assets/img/serralheiro.png";
import workers from "../../assets/img/workers.jpeg";
import { OrangeCard } from "../../components/CardOrange/card";
import { BlueCard } from "../../components/CardBlue/card";
import { GreenComment } from "../../components/GreenComment/greenComment";
import { OrangeComment } from "../../components/OrangeComment/orangeComment";
import { Footer } from "../../components/Footer/Footer";
import {
  BodyHome,
  Comments,
  ContentHeader,
  ContentServices,
  DivAboutUs,
  DivContentAboutUs,
  DivTextAboutUs,
  HeaderBtns,
  HeaderHome,
  LinksHeader,
  ListComments,
  Services,
  ServicesList,
} from "../homepage/style";

export function HomePage() {
  return (
    <>
      <NavHome />
      <BodyHome>
        <HeaderHome id="top">
          <ContentHeader>
            <div>
              <h1>
                Facilidade e proatividade na hora de atender as suas
                necessidades!
              </h1>
              <p>
                Faça login ou cadastre-se para acessar e usufruir dos melhores
                serviços do Brasil!
              </p>
              <HeaderBtns>
                <LinksHeader to="/login">Login</LinksHeader>
                <p>ou</p>
                <LinksHeader to="/register">Cadastre-se</LinksHeader>
              </HeaderBtns>
            </div>
          </ContentHeader>
        </HeaderHome>
        <main>
          <DivAboutUs id="about_us">
            <DivContentAboutUs>
              <div>
                <img src={workers} alt="Workers"></img>

                <h3>Sobre nós...</h3>
              </div>

              <DivTextAboutUs>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat temporibus asperiores sequi deleniti excepturi
                    harum incidunt quidem cupiditate eveniet adipisci, explicabo
                    at tenetur! Ipsum aspernatur, deserunt natus porro rerum a?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    ab nostrum, sequi rem, natus cupiditate ipsum facere impedit
                    veritatis dolore, eligendi tenetur unde? Aspernatur nobis
                    maxime temporibus. Illum, ad temporibus!
                  </p>
                </div>
              </DivTextAboutUs>
            </DivContentAboutUs>
          </DivAboutUs>
          <Services id="services">
            <ContentServices>
              <h3>- Serviços -</h3>
              <ServicesList>
                <OrangeCard img={pintor} type="Pintor" />
                <BlueCard img={pedreiro} type="Pedreiro" />
                <OrangeCard img={marceneiro} type="Marceneiro" />
                <BlueCard img={telhado} type="Telhados" />
                <OrangeCard img={jardim} type="Jardins" />
                <BlueCard img={janelas} type="Janelas" />
                <OrangeCard img={gas} type="Gás" />
                <BlueCard img={encanador} type="Encanador" />
                <OrangeCard img={eletricista} type="Eletricista" />
                <BlueCard img={piso} type="Pisos" />
                <OrangeCard img={piscina} type="Piscinas" />
                <BlueCard img={serralheiro} type="Serralheiro" />
              </ServicesList>
              <div></div>
            </ContentServices>
          </Services>

          <Comments id="comments">
            <div />
            <h3>O que nossos clientes dizem:</h3>

            <ListComments>
              <GreenComment
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius
          eveniet enim tempora consectetur hic. Eos, corporis aliquam rem
          dolores."
                user="Lorem Ipsun,São Paulo"
              />
              <OrangeComment
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius
          eveniet enim tempora consectetur hic. Eos, corporis aliquam rem
          dolores."
                user="Lorem Ipsun,São Paulo"
              />
              <GreenComment
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius
          eveniet enim tempora consectetur hic. Eos, corporis aliquam rem
          dolores."
                user="Lorem Ipsun,São Paulo"
              />
            </ListComments>
          </Comments>
        </main>
      </BodyHome>

      <Footer id="footer" />
    </>
  );
}
