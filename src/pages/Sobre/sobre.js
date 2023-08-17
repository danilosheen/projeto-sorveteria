import React from "react";
import "./sobre.css";

// componentes locais
import Topo from "../../components/Topo/topo";
import Rodape from "../../components/Rodape/rodape";

export default function Sobre() {
  return (
    <div>
      <Topo />
      <div>
        {/* banner sobre */}
        <section className="banner-sobre">
          <div>
            <h1 className="texto-banner">A GELATERIA</h1>
          </div>
        </section>
        {/* content sobre */}
        <section>
          <div className="content-sobre">
            <h2>Sobre Nós</h2>
            <h3>Nós simplesmente amamos sorvete!</h3>
            <br />
            <br />
            <p>
              Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              sorvete produzido. Fazemos o melhor sorvete para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              sorvete. Vendemos tanto para varejo como para atacado.
            </p>
            <br />
            <p>
              Nossos clientes podem comprar os nossos sorvetes e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.
            </p>
          </div>
          <div className="container-imgs-sobre">
            <div className="imagem-1"></div>
            <div className="imagem-2"></div>
          </div>
        </section>
      </div>
      <Rodape />
    </div>
  );
}
