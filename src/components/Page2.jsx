import "../scss/layout/Page2.scss";
import { Link } from "react-router-dom";
import exampleImage from "../images/IMG-EJEMPLO.png";

function Page2() {
  return (
    <>
      <div className="Page2-container">
        <header>
          <h1>ABECEDARIO</h1>
          <h2>Lengua de signos</h2>
        </header>
        <main>
          <div className="img-container-3of7">
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
          </div>

          <div className="img-container-1of2">
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
          </div>
          <label className="label-name-landing" htmlFor="Name">
            Prueba tu respuesta
          </label>
          <input className="input-name-landing" type="text" />
          <div>
            <Link className="button-landing" to="/">
              Vuelve al mensaje
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Page2;
