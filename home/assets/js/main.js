new Vue({
  el: "#app",
  data: {
    tempoEmSegundos: 5, // Delay time in seconds
    min: 600, // Minimum number of people in the live
    max: 1000, // Maximum number of people in the live

    // Here we define the comments, with image, name, and text
    comentarios: [
      {
        img: "./assets/img/1.webp",
        nome: "Lia",
        texto: "I have been struggling with diabetes for years. I really need help. But seeing this video gives me hope that I might finally find the solution I've been looking for.",
      },
      {
        img: "./assets/img/2.webp",
        nome: "Herbert",
        texto: "I know how tough it can be. I was in the same situation, feeling hopeless, but this approach truly helped me stabilize my blood sugar levels. I wish I had found it sooner!",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Raul",
        texto: "I felt hopeless with my diabetes, always tired and frustrated, until I found this method. It really worked for me. I think this video might help many others too. Stay positive!",
      },
      {
        img: "./assets/img/4.webp",
        nome: "Maria R.",
        texto: "If you're struggling, just know that you're not alone. I was in the same place, feeling like there was no way out, but finally found a natural way to control it. This could be the turning point for you too!",
      },
      {
        img: "./assets/img/5.webp",
        nome: "Selenna",
        texto: "Diabetes was ruining my life. I felt defeated. But after making a few changes and finding some new methods, my life improved significantly. I feel like this video can really make a difference.",
      },
      {
        img: "./assets/img/6.webp",
        nome: "Ester R",
        texto: "I can't believe how much better I feel now. I wish I had known about this sooner. Watching this makes me hopeful that others can find the same kind of help.",
      },
      {
        img: "./assets/img/7.webp",
        nome: "Love2",
        texto: "My friend recommended something that completely changed my diabetes management. I see similar things being shared here. Never lose hope, this could be your answer!",
      },
      {
        img: "./assets/img/8.webp",
        nome: "Brunno",
        texto: "For anyone still struggling: I used to feel helpless too. I thought I'd never get better, but then I found a solution that made a difference. Don't give up! This video might be what you need.",
      },
      {
        img: "./assets/img/9.webp",
        nome: "Leo",
        texto: "It took time and felt impossible, but I finally managed to get my blood sugar under control. There is a way, and I hope this video can help you find it too!",
      },
      {
        img: "./assets/img/10.webp",
        nome: "Cleo M.",
        texto: "I thought diabetes would control my life forever. But I found help, and there is hope. Maybe this video will help others the way I was helped.",
      },
      {
        img: "./assets/img/11.webp",
        nome: "Lady L.",
        texto: "I used to think nothing could help. After hearing about a natural approach, my life changed for the better. Watching this, I think it could change your life too.",
      },
      {
        img: "./assets/img/12.webp",
        nome: "The Weed",
        texto: "Trust me, there are ways to manage this. I found something that worked for me, and it looks like this video might help you find something too. Keep the faith!",
      },
      {
        img: "./assets/img/13.webp",
        nome: "Michael",
        texto: "I want to share hope with anyone struggling. I found a solution that made a huge difference in my life, and maybe this video could be your turning point.",
      },
      {
        img: "./assets/img/14.webp",
        nome: "Roque",
        texto: "I thought I had tried everything. But there's always something new to learn. Finding the right approach made all the difference for me. This video could be the one thing you haven't tried yet.",
      },
      {
        img: "./assets/img/15.webp",
        nome: "Thiago",
        texto: "Don't be discouraged. I felt lost too, until I found this new approach. Now, I feel so much better. Maybe this video is the help you need.",
      },
      {
        img: "./assets/img/16.webp",
        nome: "Rodrygo ",
        texto: "To anyone feeling overwhelmed: I was in your shoes, but I found something that worked. I believe this video could help you too. Keep pushing through!",
      },
      {
        img: "./assets/img/17.webp",
        nome: "DJ Trash",
        texto: "Managing diabetes is tough, but not impossible. I found a way, and I feel like this video might help others too. Don't lose hope!",
      },
      {
        img: "./assets/img/18.webp",
        nome: "Alone",
        texto: "I know the pain of feeling stuck with diabetes. Finding the right help was a game-changer for me. Maybe this video can be that help for you.",
      },
      {
        img: "./assets/img/19.webp",
        nome: "Mixely",
        texto: "There are people out here who understand. I found support, and you can too. This video could be the first step to getting the support you need.",
      },
      {
        img: "./assets/img/20.webp",
        nome: "Pale Man",
        texto: "Diabetes doesn't have to control you forever. There's always hope for change. Maybe this video will show you the way.",
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
