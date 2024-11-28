new Vue({
  el: "#app",
  data: {
    tempoEmSegundos: 5, // Tiempo de retraso en segundos
    min: 600, // Número mínimo de personas en vivo
    max: 1000, // Número máximo de personas en vivo

    // Aquí definimos los comentarios, con imagen, nombre y texto
    comentarios: [
      {
        img: "./assets/img/1.webp",
        nome: "Jennifer",
        texto: "He estado luchando con la diabetes durante años. Realmente necesito ayuda. Pero ver este video me da esperanza de que finalmente pueda encontrar la solución que he estado buscando.",
      },
      {
        img: "./assets/img/2.webp",
        nome: "Michael",
        texto: "Sé lo difícil que puede ser. Estaba en la misma situación, sintiéndome sin esperanza, pero este enfoque realmente me ayudó a estabilizar mis niveles de azúcar en la sangre. ¡Ojalá lo hubiera encontrado antes!",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Richard S.",
        texto: "Me sentía desesperado con mi diabetes, siempre cansado y frustrado, hasta que encontré este método. Realmente funcionó para mí. Creo que este video podría ayudar a muchas otras personas también. ¡Mantén una actitud positiva!",
      },
      {
        img: "./assets/img/4.webp",
        nome: "Barbara R.",
        texto: "Si estás luchando, solo debes saber que no estás solo. Yo estaba en el mismo lugar, sintiendo que no había salida, pero finalmente encontré una forma natural de controlarlo. ¡Esto podría ser el punto de inflexión para ti también!",
      },
      {
        img: "./assets/img/5.webp",
        nome: "Selenna",
        texto: "La diabetes estaba arruinando mi vida. Me sentía derrotada. Pero después de hacer algunos cambios y encontrar nuevos métodos, mi vida mejoró significativamente. Siento que este video realmente puede hacer la diferencia.",
      },
      {
        img: "./assets/img/6.webp",
        nome: "Sarah R",
        texto: "No puedo creer lo mucho mejor que me siento ahora. Ojalá lo hubiera sabido antes. Ver esto me da esperanza de que otros puedan encontrar el mismo tipo de ayuda.",
      },
      {
        img: "./assets/img/7.webp",
        nome: "Mark Hernandez",
        texto: "Un amigo me recomendó algo que cambió completamente la manera en que manejo mi diabetes. Veo cosas similares compartidas aquí. Nunca pierdas la esperanza, ¡esto podría ser tu respuesta!",
      },
      {
        img: "./assets/img/8.webp",
        nome: "Anthony",
        texto: "Para cualquiera que siga luchando: Yo también me sentía impotente. Pensé que nunca mejoraría, pero luego encontré una solución que hizo la diferencia. ¡No te rindas! Este video podría ser lo que necesitas.",
      },
      {
        img: "./assets/img/9.webp",
        nome: "David Miller",
        texto: "Tomó tiempo y se sintió imposible, pero finalmente logré controlar mi azúcar en la sangre. Hay una manera, y espero que este video también te ayude a encontrarla.",
      },
      {
        img: "./assets/img/10.webp",
        nome: "Cleo M.",
        texto: "Pensé que la diabetes controlaría mi vida para siempre. Pero encontré ayuda, y hay esperanza. Quizá este video ayudará a otros de la misma manera en que yo fui ayudado.",
      },
      {
        img: "./assets/img/11.webp",
        nome: "Lady L.",
        texto: "Solía pensar que nada podría ayudarme. Después de conocer un enfoque natural, mi vida cambió para mejor. Al ver esto, pienso que también podría cambiar tu vida.",
      },
      {
        img: "./assets/img/12.webp",
        nome: "Steve Lee",
        texto: "Confía en mí, hay maneras de manejar esto. Encontré algo que funcionó para mí, y parece que este video podría ayudarte a encontrar algo también. ¡Mantén la fe!",
      },
      {
        img: "./assets/img/13.webp",
        nome: "Michael",
        texto: "Quiero compartir esperanza con cualquiera que esté luchando. Encontré una solución que hizo una gran diferencia en mi vida, y quizá este video podría ser tu punto de inflexión.",
      },
      {
        img: "./assets/img/14.webp",
        nome: "Christopher",
        texto: "Pensé que ya había probado todo. Pero siempre hay algo nuevo que aprender. Encontrar el enfoque correcto hizo toda la diferencia para mí. Este video podría ser lo que no has intentado aún.",
      },
      {
        img: "./assets/img/15.webp",
        nome: "Paul Jackson",
        texto: "No te desanimes. Yo también me sentía perdido, hasta que encontré este nuevo enfoque. Ahora me siento mucho mejor. Quizá este video sea la ayuda que necesitas.",
      },
      {
        img: "./assets/img/16.webp",
        nome: "Daniel Anderson ",
        texto: "Para cualquiera que se sienta abrumado: Yo estuve en tu lugar, pero encontré algo que funcionó. Creo que este video también podría ayudarte. ¡Sigue adelante!",
      },
      {
        img: "./assets/img/17.webp",
        nome: "DJ Trash",
        texto: "Manejar la diabetes es difícil, pero no imposible. Encontré una manera, y siento que este video podría ayudar a otros también. ¡No pierdas la esperanza!",
      },
      {
        img: "./assets/img/18.webp",
        nome: "Linda Brown",
        texto: "Sé lo que es sentirte atrapado con la diabetes. Encontrar la ayuda correcta cambió mi vida. Quizá este video pueda ser esa ayuda para ti.",
      },
      {
        img: "./assets/img/19.webp",
        nome: "Betty Taylor",
        texto: "Hay personas aquí afuera que entienden. Encontré apoyo, y tú también puedes hacerlo. Este video podría ser el primer paso para obtener el apoyo que necesitas.",
      },
      {
        img: "./assets/img/20.webp",
        nome: "Andrew Perez",
        texto: "La diabetes no tiene que controlarte para siempre. Siempre hay esperanza de cambio. Quizá este video te muestre el camino.",
      },
    ],

    btnDisplay: "none", // No cambiar
    contador: 730, // No cambiar
    comentariosExibidos: [], // No cambiar
    indiceComentario: 0, // No cambiar
    showContent: true, // No cambiar
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
