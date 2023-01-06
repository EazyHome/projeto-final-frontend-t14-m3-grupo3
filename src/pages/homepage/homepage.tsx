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
import markgreen from "../../assets/img/markgreen.png";
import markorange from "../../assets/img/markorange.png";
import inversemarkorange from "../../assets/img/inversemarkorange.png";
import inversemarkgreen from "../../assets/img/inversemarkgreen.png";
import { Footer } from "../../components/Footer/footer";
import {
  BlueItem,
  BodyHome,
  Coments,
  ContentHeader,
  ContentServices,
  DivAboutUs,
  DivContentAboutUs,
  DivTextAboutUs,
  HeaderBtns,
  HeaderHome,
  OrangeItem,
  Services,
  ServicesList,
} from "./style";

export function HomePage() {
  return (
    <>
      <NavHome />
      <BodyHome>
        <HeaderHome id="top">
          <ContentHeader>
            <div>
              <h1>
                Encontre o prestador de seviços que atenda a sua necessidade de
                casa.
              </h1>
              <HeaderBtns>
                <button>Login</button>
                <p>ou</p>
                <button>Cadastre-se</button>
              </HeaderBtns>
            </div>
          </ContentHeader>
        </HeaderHome>
        <main>
          <DivAboutUs>
            <DivContentAboutUs>
              <div>
                <img src={encanador}></img>
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
          <Services>
            <ContentServices>
              <h3>Serviços</h3>
              <ServicesList>
                <OrangeItem>
                  <div>
                    <img src={pintor} alt="Pintor" />
                  </div>
                  <p>Pintor</p>
                </OrangeItem>
                <BlueItem>
                  <div>
                    <img src={pedreiro} alt="Pedreiro" />
                  </div>
                  <p>Pedreiro</p>
                </BlueItem>
                <OrangeItem>
                  <div>
                    <img src={marceneiro} alt="marceneiro" />
                  </div>
                  <p>Marceneiro</p>
                </OrangeItem>
                <BlueItem>
                  <div>
                    <img src={telhado} alt="telhado" />
                  </div>
                  <p>Telhado</p>
                </BlueItem>
                <OrangeItem>
                  <div>
                    <img src={jardim} alt="jardim" />
                  </div>
                  <p>Jardim</p>
                </OrangeItem>
                <BlueItem>
                  <div>
                    <img src={janelas} alt="janelas" />
                  </div>
                  <p>Janelas</p>
                </BlueItem>
                <OrangeItem>
                  <div>
                    <img src={gas} alt="gas" />
                  </div>
                  <p>Gas</p>
                </OrangeItem>
                <BlueItem>
                  <div>
                    <img src={encanador} alt="encanador" />
                  </div>
                  <p>Encanador</p>
                </BlueItem>
                <OrangeItem>
                  <div>
                    <img src={eletricista} alt="eletricista" />
                  </div>
                  <p>Eletricista</p>
                </OrangeItem>
                <BlueItem>
                  <div>
                    <img src={piso} alt="piso" />
                  </div>
                  <p>Piso</p>
                </BlueItem>
                <OrangeItem>
                  <div className="orangeCircle">
                    <img src={piscina} alt="piscina" />
                  </div>
                  <p>Piscina</p>
                </OrangeItem>
                <BlueItem>
                  <div>
                    <img src={serralheiro} alt="serralheiro" />
                  </div>
                  <p>Serralheiro</p>
                </BlueItem>
              </ServicesList>
            </ContentServices>
          </Services>

          <Coments className="container">
            <div className="comments">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eius eveniet enim tempora consectetur hic. Eos,
                  corporis aliquam rem dolores, eveniet voluptate iure deleniti
                  ex impedit quo aut libero optio.Lorem ipsum
                </p>
              </div>
              <img className="topLeft" src={markorange} alt="Aspas laranja" />
              <img
                className="downRight"
                src={inversemarkorange}
                alt="Aspas laranja"
              />
            </div>

            <div className="commentsgreen">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eius eveniet enim tempora consectetur hic. Eos,
                  corporis aliquam rem dolores, eveniet voluptate iure deleniti
                  ex impedit quo aut libero optio.Lorem ipsum
                </p>
              </div>
              <img className="topLeft" src={markgreen} alt="Aspas verde" />
              <img
                className="downRight"
                src={inversemarkgreen}
                alt="Aspas verde"
              />
            </div>

            <div className="comments">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eius eveniet enim tempora consectetur hic. Eos,
                  corporis aliquam rem dolores, eveniet voluptate iure deleniti
                  ex impedit quo aut libero optio.Lorem ipsum
                </p>
              </div>
              <img className="topLeft" src={markorange} alt="Aspas laranja" />
              <img
                className="downRight"
                src={inversemarkorange}
                alt="Aspas laranja"
              />
            </div>

            <div className="commentsgreen">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eius eveniet enim tempora consectetur hic. Eos,
                  corporis aliquam rem dolores, eveniet voluptate iure deleniti
                  ex impedit quo aut libero optio.Lorem ipsum
                </p>
              </div>
              <img className="topLeft" src={markgreen} alt="Aspas verde" />
              <img
                className="downRight"
                src={inversemarkgreen}
                alt="Aspas verde"
              />
            </div>
          </Coments>
        </main>
      </BodyHome>

      <Footer />
    </>
  );
}
