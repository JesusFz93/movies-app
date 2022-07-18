import React from "react";

const Title = ({ titulo, subtitulo, id }) => {
  return (
    <header>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <p>{id}</p>
    </header>
  );
};

export default Title;
