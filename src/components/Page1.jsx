import "../scss/layout/Page1.scss";
import { Link } from "react-router-dom";
import exampleImage from "../images/IMG-EJEMPLO.png";

function Page1() {
  return (
    <>
      <div className="Page1-container">
        <header>
          <h1>Descubre el mensaje</h1>
        </header>
        <main>
          <div className="img-container">
            <img
              className="example-img1"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img2"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img3"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img4"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img5"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img6"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img7"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img8"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
            <img
              className="example-img9"
              src={exampleImage}
              alt="imagen temporal para mostrar"
            />
          </div>
          <div>
            <Link className="button-page1" to="/abc">
              ¡Click!
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Page1;
