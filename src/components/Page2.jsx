import "../scss/layout/Page2.scss";
import { Link } from "react-router-dom";
import exampleImage from "../images/IMG-EJEMPLO.png";
import iconArrow from "../images/arrow-down-solid.svg";

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

          <div className="img-container-1of2">
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
          <div className="button2-container">
            <Link className="button-landing" to="/">
              Vuelve a ver la palabra
            </Link>
          </div>
          <div className="question">
            <label className="question-label" htmlFor="Answer">
              Escribe tu respuesta
            </label>
            <input className="question-input" type="text" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Page2;
