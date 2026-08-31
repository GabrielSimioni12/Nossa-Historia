export interface TimelineEvent {
  id: number
  date: string // texto livre, ex: "14 de fevereiro, 2023"
  title: string
  description: string
  photo: string // caminho em /public — pode ser imagem OU vídeo .mp4 (toca como GIF, em loop)
}

// ─────────────────────────────────────────────────────────
// EDITE AQUI: cada "capítulo" da história de vocês.
// Se o arquivo terminar em .mp4, ele toca automaticamente
// em loop e mudo, como se fosse um GIF. Qualquer outra
// extensão (.png, .jpg, .svg) aparece como foto normal.
// ─────────────────────────────────────────────────────────
export const timeline: TimelineEvent[] = [
  {
    id: 1,
    date: 'capítulo um',
    title: 'Como tudo começou',
    description:
      'Primeira vez que saimos juntos, eu ja te amava tanto nessa época',
    photo: '/linha_do_tempo/1.mp4',
  },
  {
    id: 2,
    date: 'capítulo dois',
    title: 'A primeira Foto postada',
    description:
      'O dia que assumimos nosso lindo amor',
    photo: '/linha_do_tempo/2.png',
  },
  {
    id: 3,
    date: 'capítulo três',
    title: 'Nossa primeira viagem junto',
    description:
      'Primeira vez que viajamos junto oficialmente, fomos na praia no final do ano em clima Natalino',
    photo: '/linha_do_tempo/3.jpeg',
  },
  {
    id: 4,
    date: 'capítulo quatro',
    title: 'Os pequenos momentos',
    description:
      'O dia que nossa aliança finalmente chegou, e desde então meu amor so aumentou',
    photo: '/linha_do_tempo/4.jpeg',
  },
  {
    id: 5,
    date: 'capítulo cinco',
    title: 'Os dias de hoje',
    description:
      'Nosso momento atual. É incrível olhar para trás e perceber tudo o que já vivemos e construímos juntos. ❤️',
    photo: '/linha_do_tempo/5.jpeg',
  },
]