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
      'Substitua por como vocês se conheceram — o lugar, o dia, aquela sensação de que algo estava começando.',
    photo: '/linha_do_tempo/1.mp4',
  },
  {
    id: 2,
    date: 'capítulo dois',
    title: 'O primeiro encontro',
    description:
      'Conte sobre o primeiro date: onde foram, o que conversaram, o que te fez sorrir sozinho depois.',
    photo: '/linha_do_tempo/2.png',
  },
  {
    id: 3,
    date: 'capítulo três',
    title: 'Uma viagem inesquecível',
    description:
      'Fale sobre uma viagem, passeio ou momento especial que vocês viveram juntos.',
    photo: '/linha_do_tempo/3.png',
  },
  {
    id: 4,
    date: 'capítulo quatro',
    title: 'Os pequenos momentos',
    description:
      'As coisas simples do dia a dia que fazem tudo valer a pena — o café da manhã, as risadas bobas.',
    photo: '/linha_do_tempo/4.png',
  },
  {
    id: 5,
    date: 'capítulo cinco',
    title: 'Hoje',
    description:
      'Onde vocês estão agora, e por que esse capítulo é o seu favorito até aqui.',
    photo: '/linha_do_tempo/5.png',
  },
]