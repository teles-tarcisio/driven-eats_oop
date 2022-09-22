export default class Pedido {
  constructor() {
    this.pratoSelecionado = null;
    this.bebidaSelecionada = null;
    this.sobremesaSelecionada = null;
    this.precoTotal = 0;
  }

  getPrecoTotal() {
    this.precoTotal = this?.pratoSelecionado.preco + this?.bebidaSelecionada.preco + this?.sobremesaSelecionada.preco;

    return precoTotal;
  }

  getPedidoValido() {
    if (this.pratoSelecionado && this.bebidaSelecionada && this.sobremesaSelecionada) {
      return true;
    }
    else {
      return false;
    }
  }

}