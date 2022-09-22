export default class Bebida {
  constructor(novaBebida) {
    this.nome = novaBebida.nome;
    this.imagem = novaBebida.imagem;
    this.descricao = novaBebida.descricao;
    this.preco = novaBebida.preco;
    this.elemento = null;

  }

  selecionarBebida() {
    const selecionado = document.querySelector(".bebida .selecionado");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
    }
    this.elemento.classList.add("selecionado");

    // bebidaSelecionada = { nome, preco }; ??
  }

  getBebidaView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener("click", () => {
      this.selecionarBebida();
    });
    view.innerHTML = `
      <img src="${this.imagem}" />
      <div class="titulo">${this.nome}</div>
      <div class="descricao">${this.descricao}</div>
        <div class="fundo">
          <div class="preco">R$ ${this.preco.toFixed(2)}</div>
          <div class="check">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        </div>
    `;
    
    this.elemento = view;
    return this.elemento;
  }
}
