import { useEffect } from "react";
import "./styles.scss";

export function Home() {
  return (
    <div className="container-home">
      <h1 className="home-title">Seja Bem vindo Fulano!</h1>
      <p className="home-subtitle">
        Esta é a página principal de seu sistema.{" "}
      </p>
    </div>
  );
}
