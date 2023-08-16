import React from "react";
import "./sobre.css";

// componentes locais
import Topo from "../../components/Topo/topo";
import Rodape from "../../components/Rodape/rodape";

export default function Sobre() {
  return (
    <div>
      <Topo />
      <h1>Sobre</h1>
      <Rodape />
    </div>
  );
}
