import React from "react";
import { GET_PREVISAO_PARADA } from "../api";
import styles from "./PopupMarker.module.css";

const PopupMarker = ({ nomeParada, codParada }) => {
  const [previsao, setPrevisao] = React.useState(null);

  function puxarPrevisaoParada(codParada) {
    if (codParada != null) {
      const { url, options } = GET_PREVISAO_PARADA(codParada);
      fetch(url, options)
        .then((r) => r.json())
        .then((json) => setPrevisao(json.p.l));
    }
  }

  return (
    <div
      className={styles.popupContainer}
      onClick={puxarPrevisaoParada(codParada)}
    >
      <h3>Parada {nomeParada}</h3>
      <h3>Ônibus a passar por essa parada</h3>
      {previsao != null ? (
        <div className={styles.busList}>
          {previsao.map((dados, index) => (
            <div key={index} className={styles.busItem}>
              <p>Linha: {dados.cl}</p>
              <p>Para: {dados.lt0}</p>
              <ul>
                {dados.vs.map((hora, index) => (
                  <li key={index}>
                    <span>Prefixo: {hora.p}</span>
                    <span>Previsão de chegada: {hora.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Não há ônibus a passar por essa parada.</p>
      )}
    </div>
  );
};

export default PopupMarker;
