import React from "react";
import "./sabores.css";

// componentes locais
import Topo from "../../components/Topo/topo";
import Rodape from "../../components/Rodape/rodape";

export default function Sabores() {
  return (
    <div>
      <Topo />
      <section className="banner-sabores">
        <div>
          <h1 className="texto-banner">NOSSOS SABORES</h1>
        </div>
      </section>
      <section className="secao-cards">
        <h2>SABORES DE SORVETE</h2>
        <div className="container-cards">
          {/* card 1 */}
          <div className="card">
            <div className="container-img-card">
              <img src="/assets/sabor-oreo.png" alt="" />
            </div>
            <div className="contaiter-text-card">
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card">
            <div className="container-img-card">
              <img src="/assets/sabor-pistache.png" alt="" />
            </div>
            <div className="contaiter-text-card">
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card">
            <div className="container-img-card">
              <img src="/assets/sabor-cookies-avela.png" alt="" />
            </div>
            <div className="contaiter-text-card">
              <h3>Sorvete cookies & avelã</h3>
              <p>O nosso melhor sorvete, você vai adorar o sabor.</p>
            </div>
          </div>
          {/* card 4 */}
          <div className="card">
            <div className="container-img-card">
              <img src="/assets/sorbet-kiwi.png" alt="" />
            </div>
            <div className="contaiter-text-card">
              <h3>Sorvete de Kiwi</h3>
              <p>
                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
              </p>
            </div>
          </div>
          {/* card 5 */}
          <div className="card">
            <div className="container-img-card">
              <img src="/assets/sorbet-morango.png" alt="" />
            </div>
            <div className="contaiter-text-card">
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morando gourmet. Tradicional e saboroso.</p>
            </div>
          </div>
          {/* card 6 */}
          <div className="card">
            <div className="container-img-card">
              <img src="/assets/sorbet-limao.png" alt="" />
            </div>
            <div className="contaiter-text-card">
              <h3>Sorvete de limão siciliano</h3>
              <p>O incrível sorvete de limão siciliano vai te encantar.</p>
            </div>
          </div>
        </div>
      </section>
      <Rodape />
    </div>
  );
}
