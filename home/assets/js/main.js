ame situation, but things have improved a lot since I found a natural approach that helped stabilize my blood sugar levels.",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Raul",
        texto: "I felt hopeless with my diabetes until I found this method that really worked for me. Stay positive, there is a way out!",
      },
      {
        img: "./assets/img/4.webp",
        nome: "Maria R.",
        texto: "If you're struggling, just know that you're not alone. I used to be in the same situation and finally found a way to control it naturally.",
      },
      {
        img: "./assets/img/5.webp",
        nome: "Selenna",
        texto: "Diabetes was ruining my life, but after making a few changes and trying some new things, my life is so much better now!",
      },
      {
        img: "./assets/img/6.webp",
        nome: "Ester R",
        texto: "I can't believe how much better I feel now. I wish I had known about this sooner. Keep believing, it's possible to improve!",
      },
      {
        img: "./assets/img/7.webp",
        nome: "Love2",
        texto: "My friend recommended something that completely changed my diabetes management. Never lose hope!",
      },
      {
        img: "./assets/img/8.webp",
        nome: "Brunno",
        texto: "For anyone still struggling: I used to feel helpless too, but I found a solution that made a difference. Don't give up!",
      },
      {
        img: "./assets/img/9.webp",
        nome: "Leo",
        texto: "It took time, but I finally managed to get my blood sugar levels under control. There is a way through this!",
      },
      {
        img: "./assets/img/10.webp",
        nome: "Cleo M.",
        texto: "I thought diabetes would always control my life, but I found the help I needed. There is hope!",
      },
      {
        img: "./assets/img/11.webp",
        nome: "Lady L.",
        texto: "I used to think nothing could help, but after hearing about a natural approach, my life changed for the better.",
      },
      {
        img: "./assets/img/12.webp",
        nome: "The Weed",
        texto: "Trust me, there are ways to manage this. I found something that worked for me and it can work for you too.",
      },
      {
        img: "./assets/img/13.webp",
        nome: "Michael",
        texto: "I want to share hope with anyone struggling. I found a solution that made a huge difference in my life.",
      },
      {
        img: "./assets/img/14.webp",
        nome: "Roque",
        texto: "I thought I had tried everything, but there's always something new to learn. Finding the right approach made all the difference for me.",
      },
      {
        img: "./assets/img/15.webp",
        nome: "Thiago",
        texto: "Don't be discouraged. I was lost too until I came across this new approach. Now, I feel so much better.",
      },
      {
        img: "./assets/img/16.webp",
        nome: "Rodrygo ",
        texto: "To anyone feeling overwhelmed: I found something that worked for me, and I believe you can too. Keep pushing through!",
      },
      {
        img: "./assets/img/17.webp",
        nome: "DJ Trash",
        texto: "Managing diabetes is tough, but not impossible. I found a way, and so can you.",
      },
      {
        img: "./assets/img/18.webp",
        nome: "Alone",
        texto: "I know the pain of feeling stuck with diabetes. Finding the right help was a game-changer for me.",
      },
      {
        img: "./assets/img/19.webp",
        nome: "Mixely",
        texto: "There are people out here who understand. I found support, and you can too.",
      },
      {
        img: "./assets/img/20.webp",
        nome: "Pale Man",
        texto: "Diabetes doesn't have to control you forever. There's always hope for change.",
      },
    ],

    btnDisplay: "none", // Don't change
    contador: 730, // Don't change
    comentariosExibidos: [], // Don't change
    indiceComentario: 0, // Don't change
    showContent: true, // Don't change
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
