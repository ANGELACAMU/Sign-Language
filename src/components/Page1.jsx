import "../scss/layout/Page1.scss";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <>
      <div className="Page1-container">
        <header>
          <h1>Descubre el mensaje</h1>
        </header>
        <main>
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
