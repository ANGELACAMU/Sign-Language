import "../scss/layout/Page2.scss";
import { Link } from "react-router-dom";

function Page2() {
  return (
    <>
      <div className="Page2-container">
        <header>
          <h1>ABECEDARIO</h1>
          <h2>Lengua de signos</h2>
        </header>
        <main>
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
