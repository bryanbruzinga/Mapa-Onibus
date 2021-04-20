import React from "react";
import { GET_LINHAS } from "../../api";
import { AppContext } from "../../context/AppContext";
import styles from "./Sidebar.module.css";
import SidebarInfo from "./SidebarInfo";

const Sidebar = () => {
  const { linha, sentido, setLinha, setSentido } = React.useContext(AppContext);

  const [linhaRecebida, setLinhaRecebida] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    puxarLinha(linha, sentido);
  }

  function puxarLinha(linha, sentido) {
    const { url, options } = GET_LINHAS(linha, sentido);
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setLinhaRecebida(json));
  }

  function handleChange({ target }) {
    setLinha(target.value);
  }

  function handleChangeSelect({ target }) {
    setSentido(target.value);
  }

  return (
    <div className={styles.sidebarContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="linha">Digite o número da linha: </label>
          <input
            type="number"
            placeholder="Nº Linha"
            name="linha"
            max="9999"
            value={linha}
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="sentido">Escolha o sentido da rota</label>
          <select value={sentido} onChange={handleChangeSelect} name="sentido">
            <option value="1" selected>
              Sentido Terminal principal para secundário.
            </option>
            <option value="2">
              Sentido Terminal secundário para principal.
            </option>
          </select>
        </div>
        <button className={styles.btnBuscar}>Buscar</button>
      </form>
      <SidebarInfo linhaRecebida={linhaRecebida} />
    </div>
  );
};

export default Sidebar;
