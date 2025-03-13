import "../scss/layout/Page1.scss";
import { Link } from "react-router-dom";
import exampleImage from "../images/IMG-EJEMPLO.png";

function Page1() {
  return (
    <>
      <div className="page1-container">
        <header className="header1">
          <h1>¿Cúal es la palabra que deletreo?</h1>
        </header>
        <main className="main1">
          <div className="img-container">
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
            <img
              className="example-img"
              src={exampleImage}
              alt="temporari image"
            />
          </div>
          <div className="button-container">
            <Link className="button-page1" to="/abc">
              ¡ Descúbrelo !
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Page1;
