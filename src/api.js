export const ALT_URL = "https://aiko-olhovivo-proxy.aikodigital.io";
const token = process.env.REACT_APP_TOKEN;

export function TOKEN_POST() {
  return {
    url: ALT_URL + `/Login/Autenticar?token=${token}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    },
  };
}

export function GET_POSICAO() {
  return {
    url: ALT_URL + "/Posicao",
    options: {
      method: "GET",
    },
  };
}

export function GET_PARADA_TERMO_BUSCA() {
  return {
    url: ALT_URL + "/Parada/Buscar?termosBusca=a",
    options: {
      method: "GET",
    },
  };
}

export function GET_LINHAS(linhaBuscada, sentido) {
  return {
    url:
      ALT_URL +
      `/Linha/BuscarLinhaSentido?termosBusca=${linhaBuscada}&sentido=${sentido}`,
    options: {
      method: "GET",
    },
  };
}

export function GET_PREVISAO_PARADA(parada) {
  return {
    url: ALT_URL + `/Previsao/Parada?codigoParada=${parada}`,
    options: {
      method: "GET",
    },
  };
}
