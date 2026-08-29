export interface StorySlide {
  id: number
  photo: string // caminho em /public/photos_OF
  caption: string
  duration: number // segundos que o slide fica na tela antes de avançar sozinho
  music: {
    title: string
    artist: string
    src: string // caminho em /public/music
  }
}

// ─────────────────────────────────────────────────────────
// EDITE AQUI: cada slide do "story".
// - photo: já apontando pras suas 13 fotos em public/photos_OF/
// - caption: escreva a legenda de cada momento
// - music: coloque o .mp3 de cada música em public/music/
//   com esses nomes de arquivo (ou troque o "src" pelo nome que preferir)
// - duration: quantos segundos a foto fica na tela (8s por padrão)
// ─────────────────────────────────────────────────────────
export const storySlides: StorySlide[] = [
  { id: 1, photo: '/photos_OF/1.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 1', artist: 'Artista', src: '/music/story-1.mp3' } },
  { id: 2, photo: '/photos_OF/2.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 2', artist: 'Artista', src: '/music/story-2.mp3' } },
  { id: 3, photo: '/photos_OF/3.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 3', artist: 'Artista', src: '/music/story-3.mp3' } },
  { id: 4, photo: '/photos_OF/4.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 4', artist: 'Artista', src: '/music/story-4.mp3' } },
  { id: 5, photo: '/photos_OF/5.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 5', artist: 'Artista', src: '/music/story-5.mp3' } },
  { id: 6, photo: '/photos_OF/6.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 6', artist: 'Artista', src: '/music/story-6.mp3' } },
  { id: 7, photo: '/photos_OF/7.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 7', artist: 'Artista', src: '/music/story-7.mp3' } },
  { id: 8, photo: '/photos_OF/8.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 8', artist: 'Artista', src: '/music/story-8.mp3' } },
  { id: 9, photo: '/photos_OF/9.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 9', artist: 'Artista', src: '/music/story-9.mp3' } },
  { id: 10, photo: '/photos_OF/10.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 10', artist: 'Artista', src: '/music/story-10.mp3' } },
  { id: 11, photo: '/photos_OF/11.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 11', artist: 'Artista', src: '/music/story-11.mp3' } },
  { id: 12, photo: '/photos_OF/12.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 12', artist: 'Artista', src: '/music/story-12.mp3' } },
  { id: 13, photo: '/photos_OF/13.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 13', artist: 'Artista', src: '/music/story-13.mp3' } },
]