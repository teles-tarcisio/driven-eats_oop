export default class Prato {
  constructor(novoPrato) {
    this.nome = novoPrato.nome;
    this.imagem = novoPrato.imagem;
    this.descricao = novoPrato.descricao;
    this.preco = novoPrato.preco;
    this.elemento = null;

  }

  selecionarPrato() {
    const selecionado = document.querySelector(".prato .selecionado");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
    }
    this.elemento.classList.add("selecionado");
    
    // como fazer pratoSelecionado = this?

  }

  getPratoView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener("click", () => {
      this.selecionarPrato();
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