import React from "react";
import Title from "../components/Title";

const HomePage = () => {
  return (
    <>
      <Title titulo="Pagina principal" subtitulo="subtitulo principal" id={6} />
      <main>
        <article>
          <p>Esta es la pagina principal de mi aplicacion</p>
        </article>
      </main>
    </>
  );
};

export default HomePage;
