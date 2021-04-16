import React from "react";
import { GET_POSICAO } from "./api";

function App() {
  const [data, setData] = React.useState(null);

  async function getUser() {
    const { url, options } = GET_POSICAO();
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => setData(json));
  }
  setInterval(() => {
    getUser();
  }, 5000);

  return (
    <div>
      {data != null &&
        data.l.map((item) => (
          <p>
            {item.vs.map((posicao) => (
              <div>
                <p>Posição X: {posicao.px}</p>
                <p>Posição Y: {posicao.py}</p>
              </div>
            ))}
          </p>
        ))}
    </div>
  );
}

export default App;
