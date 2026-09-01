export interface GalleryItem {
  id: number
  src: string // imagem ou vídeo (.mp4) em /public
}

// ─────────────────────────────────────────────────────────
// EDITE AQUI: fotos descontraídas do carrossel — adicione
// quantas quiser em public/fotos_zuadas
// ─────────────────────────────────────────────────────────
export const galleryItems: GalleryItem[] = [
  { id: 1, src: '/fotos_zuadas/1.png' },
  { id: 2, src: '/fotos_zuadas/2.png' },
  { id: 3, src: '/fotos_zuadas/3.jpeg' },
  { id: 4, src: '/fotos_zuadas/4.jpeg' },
  { id: 5, src: '/fotos_zuadas/5.jpeg' },
  { id: 6, src: '/fotos_zuadas/6.jpeg' },
  { id: 7, src: '/fotos_zuadas/7.jpeg' },
]