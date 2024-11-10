new Vue({
  el: "#app",
  data: {
    tempoEmSegundos: 5, //Tempo em segundos do delay
    min: 600, // valor mÃ­nimo de pessoas na live
    max: 1000, // mÃ¡ximo de pessoas na live

    //aqui definimos os comentarios, com imagem,nome e texto
    comentarios: [
      {
        img: "./assets/img/1.webp",
        nome: "Lia",
        texto: "Peterson é lindo.",
      },
      {
        img: "./assets/img/2.webp",
        nome: "Herbert",
        texto:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Raul",
        texto:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      },
      {
        img: "./assets/img/4.webp",
        nome: "Maria R.",
        texto:
          " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      },
      {
        img: "./assets/img/5.webp",
        nome: "Selenna",
        texto: " It has survived not only five centurie.",
      },
      {
        img: "./assets/img/6.webp",
        nome: "Ester R",
        texto:
          " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        img: "./assets/img/7.webp",
        nome: "Love2",
        texto:
          "he release of Letraset sheets containing Lorem Ipsum passages, and more recently  ",
      },
      {
        img: "./assets/img/8.webp",
        nome: "Brunno",
        texto:
          "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      },
      {
        img: "./assets/img/9.webp",
        nome: "Leo",
        texto: "Finibus Bonorum et Malorum",
      },
      {
        img: "./assets/img/10.webp",
        nome: "Cleo M.",
        texto: "Lorem ipsum dolor sit amet...",
      },
      {
        img: "./assets/img/11.webp",
        nome: "Lady L.",
        texto:
          "combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
      },
      {
        img: "./assets/img/12.webp",
        nome: "The Weed",
        texto:
          "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
      {
        img: "./assets/img/13.webp",
        nome: "Michael",
        texto: "Sections 1.10.32 and 1.10.33 from ",
      },
      {
        img: "./assets/img/14.webp",
        nome: "Roque",
        texto: "The standard Lorem Ipsum passage, used since the 1500s",
      },
      {
        img: "./assets/img/15.webp",
        nome: "Thiago",
        texto: "Section 1.10.32 of",
      },
      {
        img: "./assets/img/16.webp",
        nome: "Rodrygo ",
        texto:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      },
      {
        img: "./assets/img/17.webp",
        nome: "DJ Trash",
        texto:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      },
      {
        img: "./assets/img/18.webp",
        nome: "Alone",
        texto:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects",
      },
      {
        img: "./assets/img/19.webp",
        nome: "Mixely",
        texto:
          " give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects",
      },
      {
        img: "./assets/img/20.webp",
        nome: "Pale Man",
        texto: "Opa!",
      },
    ],

    btnDisplay: "none", //nÃ£o mexe
    contador: 730, //nÃ£o mexe
    comentariosExibidos: [], //nÃ£o mexe
    indiceComentario: 0, //nÃ£o mex
    showContent: true, //nÃ£o mex
  },
  mounted() {
    this.exibirComentario();
    this.delay();
    this.atualizarContador();
  },
  methods: {
    delay() {
      setTimeout(() => {
        this.btnDisplay = "flex";
      }, this.tempoEmSegundos * 1000);
    },
    gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(15000, 30000));
    },
    exibirComentario() {
      if (this.indiceComentario < this.comentarios.length) {
        this.comentariosExibidos.push(this.comentarios[this.indiceComentario]);
        this.indiceComentario++;
        setTimeout(
          this.exibirComentario,
          this.gerarNumeroAleatorio(10000, 30000)
        );
      }
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(5000, 20000));
    },
    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
});
