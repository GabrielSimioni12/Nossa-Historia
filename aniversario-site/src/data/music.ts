export interface Track {
  id: number
  title: string
  artist: string
  src: string // caminho em /public/music
}

// ─────────────────────────────────────────────────────────
// EDITE AQUI: coloque os arquivos .mp3 em public/music/
// e liste-os aqui na ordem que quiser que toquem.
// ─────────────────────────────────────────────────────────
export const playlist: Track[] = [
  {
    id: 1,
    title: 'Nome da música 1',
    artist: 'Artista',
    src: '/music/musica-1.mp3',
  },
  {
    id: 2,
    title: 'Nome da música 2',
    artist: 'Artista',
    src: '/music/musica-2.mp3',
  },
  {
    id: 3,
    title: 'Nome da música 3',
    artist: 'Artista',
    src: '/music/musica-3.mp3',
  },
]
