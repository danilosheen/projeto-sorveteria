import React from "react";
import "./home.css";

import Topo from "../../components/Topo/topo";
import Rodape from "../../components/Rodape/rodape";

export default function Home() {
  return (
    <div>
      <Topo />
      <div>
        <section className="banner">
          <div>
            <h1 className="texto-banner">SORVETE ARTESANAL</h1>
          </div>
        </section>
        {/* conteudo sabores */}
        <section className="conteudo">
          <div className="container-img">
            <img src="/assets/banner-sabores.jpg" alt="banner-sabores.jpg" />
          </div>
          <div className="container-text">
            <h2>NOSSOS SABORES</h2>
            <h3>Novos e deliciosos!</h3>
            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
              gelateria todos os nossos produtos são naturais, à base de frutas
              e sem nenhum conservante! Também temos opçoes sem lactose e sem
              açúcar. Venha conhecer e perceber que tem como o sorvete ser
              decicioso e saudável ao mesmo tempo!
            </p>
          </div>
        </section>
        {/* conteudo nossos eventos */}
        <section className="conteudo">
          <div className="container-text segundo-container">
            <h2>NOSSOS EVENTOS</h2>
            <h3>Delícias com sorvete!</h3>
            <p>
              Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvetes da sua vida! Venha nos conhecer e passar um
              tempinho aqui com a gente.
            </p>
          </div>
          <div className="container-img">
            <img src="/assets/eventos-image.jpg" alt="banner-eventos.jpg" />
          </div>
        </section>
        {/* conteudo sobre */}
        <section className="conteudo">
          <div className="container-img">
            <img src="/assets/sobre-image.jpg" alt="banner-sabores.jpg" />
          </div>
          <div className="container-text">
            <h2>SOBRE NÓS</h2>
            <h3>Alegria em cada casquinha!</h3>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
          </div>
        </section>
      </div>
      <Rodape />
    </div>
  );
}
