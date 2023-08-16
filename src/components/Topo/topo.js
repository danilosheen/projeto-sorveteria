import React from "react";
import { Link } from "react-router-dom";
import './topo.css'

export default function Topo() {
  return (
    <header>
      <div className="container-topo">
        <img src="/assets/logo.png" alt="" />
        <nav>
            <Link className="links-topo" to='/'>Home</Link>
            <Link className="links-topo" to='/sabores'>Sabores</Link>
            <Link className="links-topo" to='/sobre'>Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
