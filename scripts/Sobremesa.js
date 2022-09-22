export default class Sobremesa {
  constructor(novaSobremesa) {
    this.nome = novaSobremesa.nome;
    this.imagem = novaSobremesa.imagem;
    this.descricao = novaSobremesa.descricao;
    this.preco = novaSobremesa.preco;
    this.elemento = null;

  }

  selecionarSobremesa() {
    const selecionado = document.querySelector(".sobremesa .selecionado");
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
    }
    this.elemento.classList.add("selecionado");

    // sobremesaSelecionada = { nome, preco }; ??
  }

  getSobremesaView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener("click", () => {
      this.selecionarSobremesa();
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
