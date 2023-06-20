export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const btcResponse = await fetch("https://blockchain.info/ticker");
      const bitcoin = await btcResponse.json();

      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchBitcoin();
}
