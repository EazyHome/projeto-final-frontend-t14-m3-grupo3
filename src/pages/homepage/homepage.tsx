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
import { BodyHome, Coments, DivAboutUs, Services } from "./style";
import { Footer } from "../../components/Footer/footer";

export function HomePage() {
  return (
    <>
      <NavHome></NavHome>
      <BodyHome>
        <div id="top" className="divImg">
          <div className="intro">
            <h1>
              Encontre o prestador de seviços que atenda a sua necessidade de
              casa.
            </h1>
            <div className="introButtons">
              <button>Login</button>
              <button>Cadastre-se</button>
            </div>
          </div>
        </div>

        <DivAboutUs>
          <div className="container">
            <h3>Sobre nós</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              temporibus asperiores sequi deleniti excepturi harum incidunt
              quidem cupiditate eveniet adipisci, explicabo at tenetur! Ipsum
              aspernatur, deserunt natus porro rerum a? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Hic ab nostrum, sequi rem,
              natus cupiditate ipsum facere impedit veritatis dolore, eligendi
              tenetur unde? Aspernatur nobis maxime temporibus. Illum, ad
              temporibus! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eaque maiores quisquam, ex fugit hic rem voluptas ratione
              reprehenderit quidem delectus tempore vel voluptates incidunt. At
              quaerat quisquam tempore voluptates architecto!
            </p>
          </div>
        </DivAboutUs>

        <Services>
          <div className="container">
            <h3>Serviços</h3>
            <ul className="servicesCards">
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={pintor} alt="Pintor" />
                </div>
                <p>Pintor</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={pedreiro} alt="Pedreiro" />
                </div>
                <p>Pedreiro</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={marceneiro} alt="marceneiro" />
                </div>
                <p>Marceneiro</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={telhado} alt="telhado" />
                </div>
                <p>Telhado</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={jardim} alt="jardim" />
                </div>
                <p>Jardim</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={janelas} alt="janelas" />
                </div>
                <p>Janelas</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={gas} alt="gas" />
                </div>
                <p>Gas</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={encanador} alt="encanador" />
                </div>
                <p>Encanador</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={eletricista} alt="eletricista" />
                </div>
                <p>Eletricista</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={piso} alt="piso" />
                </div>
                <p>Piso</p>
              </li>
              <li className="orangeCard">
                <div className="orangeCircle">
                  <img src={piscina} alt="piscina" />
                </div>
                <p>Piscina</p>
              </li>
              <li className="greenCard">
                <div className="greenCircle">
                  <img src={serralheiro} alt="serralheiro" />
                </div>
                <p>Serralheiro</p>
              </li>
            </ul>
          </div>
        </Services>

        <Coments className="container">
          <div className="comments">
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                eius eveniet enim tempora consectetur hic. Eos, corporis aliquam
                rem dolores, eveniet voluptate iure deleniti ex impedit quo aut
                libero optio.Lorem ipsum
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                eius eveniet enim tempora consectetur hic. Eos, corporis aliquam
                rem dolores, eveniet voluptate iure deleniti ex impedit quo aut
                libero optio.Lorem ipsum
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                eius eveniet enim tempora consectetur hic. Eos, corporis aliquam
                rem dolores, eveniet voluptate iure deleniti ex impedit quo aut
                libero optio.Lorem ipsum
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                eius eveniet enim tempora consectetur hic. Eos, corporis aliquam
                rem dolores, eveniet voluptate iure deleniti ex impedit quo aut
                libero optio.Lorem ipsum
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
      </BodyHome>

      <Footer />
    </>
  );
}
