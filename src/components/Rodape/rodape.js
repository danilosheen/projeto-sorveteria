import React from "react";
import './rodape.css'

export default function Rodape(){
    return(
        <footer>
            <div className="content-rodape">
                <img className="logo-rodape" src="/assets/logo.png" alt="logo.png" />
                <div>
                    <h2>ENDEREÇO</h2>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São paulo, SP 12345-678</p>
                </div>
                <div>
                    <h2>CONTATO</h2>
                    <p>info@email.com</p>
                    <p>Tel: (11)9999-9999</p>
                </div>
                <div>
                    <h2>HORÁRIOS</h2>
                    <p>Aberto todos os dias</p>
                    <p>10:00 às 22:00</p>
                </div>
            </div>
            <div className="text-dev-footer">
                <p>Gelateria desenvolvida por Danilo Ferreira</p>
            </div>
        </footer>
    );
}