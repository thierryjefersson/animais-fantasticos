export default function valorBitcoin(url, target) {
  async function fetchBitcoin() {
    try {
      const btcResponse = await fetch(url);
      const bitcoin = await btcResponse.json();

      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  return fetchBitcoin();
}
