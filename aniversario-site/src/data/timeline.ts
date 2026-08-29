export interface TimelineEvent {
  id: number
  date: string // texto livre, ex: "14 de fevereiro, 2023"
  title: string
  description: string
  photo: string // caminho em /public/photos
}

// ─────────────────────────────────────────────────────────
// EDITE AQUI: cada "capítulo" da história de vocês.
// Troque a foto pelo arquivo real em public/photos/
// (pode manter os mesmos nomes de arquivo ou trocar o caminho)
// ─────────────────────────────────────────────────────────
export const timeline: TimelineEvent[] = [
  {
    id: 1,
    date: 'capítulo um',
    title: 'Como tudo começou',
    description:
      'Substitua por como vocês se conheceram — o lugar, o dia, aquela sensação de que algo estava começando.',
    photo: '/photos/photo-1.svg',
  },
  {
    id: 2,
    date: 'capítulo dois',
    title: 'O primeiro encontro',
    description:
      'Conte sobre o primeiro date: onde foram, o que conversaram, o que te fez sorrir sozinho depois.',
    photo: '/photos/photo-2.svg',
  },
  {
    id: 3,
    date: 'capítulo três',
    title: 'Uma viagem inesquecível',
    description:
      'Fale sobre uma viagem, passeio ou momento especial que vocês viveram juntos.',
    photo: '/photos/photo-3.svg',
  },
  {
    id: 4,
    date: 'capítulo quatro',
    title: 'Os pequenos momentos',
    description:
      'As coisas simples do dia a dia que fazem tudo valer a pena — o café da manhã, as risadas bobas.',
    photo: '/photos/photo-4.svg',
  },
  {
    id: 5,
    date: 'capítulo cinco',
    title: 'Hoje',
    description:
      'Onde vocês estão agora, e por que esse capítulo é o seu favorito até aqui.',
    photo: '/photos/photo-5.svg',
  },
]
