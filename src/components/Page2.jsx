import "../scss/layout/Page2.scss";
import { Link } from "react-router-dom";
//import exampleImage from "../images/IMG-EJEMPLO.png";
import letterA from "../images/LETRAS/A.png";
import letterB from "../images/LETRAS/B.png";
import letterC from "../images/LETRAS/C.png";
import letterD from "../images/LETRAS/D.png";
import letterE from "../images/LETRAS/E.png";
import letterF from "../images/LETRAS/F.png";
import letterG from "../images/LETRAS/G.png";
import letterH from "../images/LETRAS/H.png";
import letterI from "../images/LETRAS/I.png";
import letterJ from "../images/LETRAS/J.png";
import letterK from "../images/LETRAS/K.png";
import letterL from "../images/LETRAS/L.png";
import letterM from "../images/LETRAS/M.png";
import letterN from "../images/LETRAS/N.png";
import letterÑ from "../images/LETRAS/Ñ.png";
import letterO from "../images/LETRAS/O.png";
import letterP from "../images/LETRAS/P.png";
import letterQ from "../images/LETRAS/Q.png";
import letterR from "../images/LETRAS/R.png";
import letterS from "../images/LETRAS/S.png";
import letterT from "../images/LETRAS/T.png";
import letterU from "../images/LETRAS/U.png";
import letterV from "../images/LETRAS/V.png";
import letterW from "../images/LETRAS/W.png";
import letterX from "../images/LETRAS/X.png";
import letterY from "../images/LETRAS/Y.png";
import letterZ from "../images/LETRAS/Z.png";

import iconArrow from "../images/arrow-down-solid.svg";
import IllustrationA from "../images/ILLUSTRATIONS/A-hand.png";

function Page2() {
  return (
    <>
      <div className="Page2-container">
        <header className="header2">
          <h1 className="h1-1">ABECEDARIO</h1>
          <h2>Lengua de signos</h2>
          <img className="icon-arrow" src={iconArrow} alt="icon arrow" />
        </header>
        <main>
          <div className="img-container-3of7">
            <button className="button-ABC">
              <img
                className="example-img2"
                src={letterA}
                alt="temporari image"
              />
            </button>
            <img className="example-img2" src={letterB} alt="temporari image" />
            <img className="example-img2" src={letterC} alt="temporari image" />
            <img className="example-img2" src={letterD} alt="temporari image" />
            <img className="example-img2" src={letterE} alt="temporari image" />
            <img className="example-img2" src={letterF} alt="temporari image" />
            <img className="example-img2" src={letterG} alt="temporari image" />
            <img className="example-img2" src={letterH} alt="temporari image" />
            <img className="example-img2" src={letterI} alt="temporari image" />
            <img className="example-img2" src={letterJ} alt="temporari image" />
            <img className="example-img2" src={letterK} alt="temporari image" />
            <img className="example-img2" src={letterL} alt="temporari image" />
            <img className="example-img2" src={letterM} alt="temporari image" />
            <img className="example-img2" src={letterN} alt="temporari image" />
            <img className="example-img2" src={letterÑ} alt="temporari image" />
            <img className="example-img2" src={letterO} alt="temporari image" />
            <img className="example-img2" src={letterP} alt="temporari image" />
            <img className="example-img2" src={letterQ} alt="temporari image" />
            <img className="example-img2" src={letterR} alt="temporari image" />
            <img className="example-img2" src={letterS} alt="temporari image" />
            <img className="example-img2" src={letterT} alt="temporari image" />
            <img className="example-img2" src={letterU} alt="temporari image" />
            <img className="example-img2" src={letterV} alt="temporari image" />
            <img className="example-img2" src={letterW} alt="temporari image" />
            <img className="example-img2" src={letterX} alt="temporari image" />
            <img className="example-img2" src={letterY} alt="temporari image" />
            <img className="example-img2" src={letterZ} alt="temporari image" />
          </div>

          {/*<div className="img-container-1of2"></div>*/}

          <div className="modal-container" id="modal_container">
            <img
              className="ilu-A"
              src={IllustrationA}
              alt="image ilustrated sign A"
            />
            <button id="close" className="button-close">
              Cerrar
            </button>
          </div>

          <div className="buttons-container">
            <Link className="button-landing" to="/">
              Vuelve a ver la palabra
            </Link>
            <Link className="discover-answer" to="/result">
              Descubre tu respuesta
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Page2;
