import "../scss/layout/Page3.scss";

function Page3() {
  return (
    <>
      <div className="Page3-container">
        <header>
          <h1 className="question">¿Qué dice mi mensaje?</h1>
        </header>
        <main>
          <div className="result">
            <label className="result-label" htmlFor="Answer">
              Escribe tu respuesta
            </label>
            <input className="result-input" type="text" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Page3;
