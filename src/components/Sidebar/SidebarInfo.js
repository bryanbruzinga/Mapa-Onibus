import React from "react";
import styles from "./SidebarInfo.module.css";

const SidebarInfo = ({ linhaRecebida }) => {
  return (
    <div>
      {linhaRecebida != null &&
        linhaRecebida.map((item, index) => (
          <div key={index} className={styles.response}>
            <p>Código da Linha: ${item.cl}</p>
            <p>Sentido Terminal Principal: ${item.tp}</p>
            <p>Sentido Terminal Secundário: ${item.ts}</p>
          </div>
        ))}
    </div>
  );
};

export default SidebarInfo;
