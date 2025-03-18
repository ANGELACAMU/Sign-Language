import "../scss/layout/Page2.scss";
import { Link } from "react-router-dom";
import exampleImage from "../images/IMG-EJEMPLO.png";
import letterA from "../images/LETRAS/A.png";
import letterB from "../images/LETRAS/B.png";
import letterC from "../images/LETRAS/C.png";
import letterD from "../images/LETRAS/D.png";
import letterE from "../images/LETRAS/E.png";
import letterF from "../images/LETRAS/F.png";
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
            <button>
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
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="temporari image"
            />
          </div>

          {/*<div className="img-container-1of2"></div>*/}

          <div className="modal-container">
            <img
              className="ilu-A"
              src={IllustrationA}
              alt="image ilustrated sign A"
            />
            <button className="button-close">Cerrar</button>
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
