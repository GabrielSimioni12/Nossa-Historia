export interface StorySlide {
  id: number
  photo: string
  caption: string
  duration: number
  music: {
    title: string
    artist: string
    src: string
  }
}

export const storySlides: StorySlide[] = [
  { id: 1, photo: '/photos_OF/1.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Beginning Middle End', artist: 'Leah Nobel', src: '/music/story-1.mp3' } },
  { id: 2, photo: '/photos_OF/2.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Die With a Smile', artist: 'Bruno Mars & Lady Gaga', src: '/music/story-2.mp3' } },
  { id: 3, photo: '/photos_OF/3.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Babydoll', artist: 'Dominic Fike', src: '/music/story-3.mp3' } },
  { id: 4, photo: '/photos_OF/4.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'End of Beginning', artist: 'Djo', src: '/music/story-4.mp3' } },
  { id: 5, photo: '/photos_OF/5.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'I Wanna Be Yours (violino)', artist: 'Dramatica', src: '/music/story-5.mp3' } },
  { id: 6, photo: '/photos_OF/6.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'If I Lose It All', artist: 'Boba', src: '/music/story-6.mp3' } },
  { id: 7, photo: '/photos_OF/7.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Love Me Not (slowed)', artist: 'Ravyn Lenae', src: '/music/story-7.mp3' } },
  { id: 8, photo: '/photos_OF/8.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Show a Little Loving', artist: 'Ishika', src: '/music/story-8.mp3' } },
  { id: 9, photo: '/photos_OF/9.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Wonderwall (Unplugged)', artist: 'Oasis', src: '/music/story-9.mp3' } },
  { id: 10, photo: '/photos_OF/10.png', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Young and Beautiful', artist: 'Lana Del Rey', src: '/music/story-10.mp3' } },
  { id: 11, photo: '/photos_OF/11.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 11', artist: 'Artista', src: '/music/story-11.mp3' } },
  { id: 12, photo: '/photos_OF/12.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 12', artist: 'Artista', src: '/music/story-12.mp3' } },
  { id: 13, photo: '/photos_OF/13.png', caption: 'Escreva aqui a legenda desse momento', duration: 8, music: { title: 'Nome da música 13', artist: 'Artista', src: '/music/story-13.mp3' } },
  { id: 14, photo: '/photos_OF/14.jpeg', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Nome da música 14', artist: 'Artista', src: '/music/story-14.mp3' } },
  { id: 15, photo: '/photos_OF/15.mp4', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Nome da música 15', artist: 'Artista', src: '/music/story-15.mp3' } },
  { id: 16, photo: '/photos_OF/16.jpeg', caption: 'Escreva aqui a legenda desse momento', duration: 70, music: { title: 'Nome da música 16', artist: 'Artista', src: '/music/story-16.mp3' } },
]