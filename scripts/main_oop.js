import Pedido from "./Pedido";
import Prato from "./Prato";
import Bebida from "./Bebida";
import Sobremesa from "./Sobremesa";

import img_prato from "../img/frango_yin_yang.png";
import img_bebida from "../img/coquinha_gelada.png";
import img_sobremesa from "../img/pudim.png";


const pratos = [
  {
    nome: "Estrombelete de Frango",
    imagem: img_prato,
    descricao: "Um pouco de batata, um pouco de salada",
    preco: 14.9,
  },
  {
    nome: "Asa de Boi",
    imagem: img_prato,
    descricao: "Com molho shoyu",
    preco: 14.9,
  },
  {
    nome: "Carne de Monstro",
    imagem: img_prato,
    descricao: "Com batata assada e farofa",
    preco: 14.9,
  },
];

const bebidas = [
  {
    nome: "Coquinha gelada",
    imagem: img_bebida,
    descricao: "Lata 350ml",
    preco: 4.9,
  },
  {
    nome: "Caldo de Cana",
    imagem: img_bebida,
    descricao: "Copo 600ml",
    preco: 4.9,
  },
  {
    nome: "Corote Gelado",
    imagem: img_bebida,
    descricao: "Garrafa 400ml",
    preco: 4.9,
  },
];

const sobremesas = [
  {
    nome: "Pudim",
    imagem: img_sobremesa,
    descricao: "Gosto de doce de leite",
    preco: 7.9,
  },
  {
    nome: "Flam",
    imagem: img_sobremesa,
    descricao: "Gosto de chocolate",
    preco: 7.9,
  },
  {
    nome: "Brigadeiro",
    imagem: img_sobremesa,
    descricao: "3 unidades",
    preco: 7.9,
  },
];

class App {
  constructor(pratos, bebidas, sobremesas) {
    this.pratos = pratos;
    this.bebidas = bebidas;
    this.sobremesas = sobremesas;

    this.pedido = null;
    
    this.btnConfirmar = document.querySelector(".confirmar");
    this.btnCancelar = document.querySelector(".cancelar");
    this.btnPedir = document.querySelector(".fazer-pedido");
    
    this.pratosContainer = document.querySelector(".opcoes.prato");
    this.bebidasContainer = document.querySelector(".opcoes.bebida");
    this.sobremesasContainer = document.querySelector(".opcoes.sobremesa");
    
    this.initialize();
  }

  verificarPedido() {
    if (this.pedido.getPedidoValido()) {
      btnPedir.classList.add("ativo");
      btnPedir.disabled = false;
      btnPedir.innerHTML = "Fazer pedido";
    }
  }

  confirmarPedido() {
    const modal = document.querySelector(".overlay");
    modal.classList.remove("escondido");

    document.querySelector(".confirmar-pedido .prato .nome").innerHTML =
      this.pedido.pratoSelecionado.nome;
    document.querySelector(".confirmar-pedido .prato .preco").innerHTML =
      this.pedido.pratoSelecionado.preco.toFixed(2);

    document.querySelector(".confirmar-pedido .bebida .nome").innerHTML =
      this.pedido.bebidaSelecionada.nome;
    document.querySelector(".confirmar-pedido .bebida .preco").innerHTML =
      this.pedido.bebidaSelecionada.preco.toFixed(2);

    document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML =
      this.pedido.sobremesaSelecionada.nome;
    document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML =
      this.pedido.sobremesaSelecionada.preco.toFixed(2);

    document.querySelector(".confirmar-pedido .total .preco").innerHTML =
      this.pedido.getPrecoTotal().toFixed(2);
  }
  
  cancelarPedido() {
    const modal = document.querySelector(".overlay");
    modal.classList.add("escondido");
  }

  initialize() {
    this.pedido = new Pedido();

    this.pratos.forEach((prato) => {
      new Prato(prato);
    });
    
    this.bebidas.forEach((bebida) => {
      new Bebida(bebida);
    });
    
    this.sobremesas.forEach((sobremesa) => {
      new Sobremesa(sobremesa);
    });

    this.btnConfirmar.addEventListener("click", () => {
      this.enviarZap();
    });
    
    this.btnCancelar.addEventListener("click", () => {
      this.cancelarPedido();
    });
    
    this.btnPedir.addEventListener("click", () => {
      this.confirmarPedido();
    });

    this.pratos.forEach((prato) => this.pratosContainer.appendChild(prato.getPratoView()));
    
    this.bebidas.forEach((bebida) => this.bebidasContainer.appendChild(bebida.getBebidaView()));

    this.sobremesas.forEach((sobremesa) => this.sobremesasContainer.appendChild(sobremesa.getSobremesaView()));

  }

  enviarZap() {
    const telefoneRestaurante = 553299999999;
    const encodedText = encodeURIComponent(
      `Olá, gostaria de fazer o pedido: \n- Prato: ${this.pedido.pratoSelecionado.nome
      } \n- Bebida: ${this.pedido.bebidaSelecionada.nome} \n- Sobremesa: ${this.pedido.sobremesaSelecionada.nome
      } \nTotal: R$ ${this.pedido.getPrecoTotal().toFixed(2)}`
    );

    const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
    window.open(urlWhatsapp);
  }

}

const newApp = new App(pratos, bebidas, sobremesas);