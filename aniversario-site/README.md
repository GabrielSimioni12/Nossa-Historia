# Nossa História 💛

Site de aniversário em React + TypeScript, estilo "story", com linha do tempo
em constelação, galeria, playlist e efeitos.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

## O que editar

Tudo que você precisa trocar está nesses arquivos — não precisa mexer no resto:

| O que editar              | Arquivo                          |
| -------------------------- | --------------------------------- |
| Nome dela, frase de abertura, data de início do namoro, mensagem final | `src/data/config.ts` |
| Capítulos da linha do tempo (textos)          | `src/data/timeline.ts`      |
| Fotos (substitua os arquivos mantendo o nome, ou aponte para novos arquivos) | `public/photos/` + `src/data/timeline.ts` |
| Músicas da playlist         | `public/music/` (coloque os `.mp3`) + `src/data/music.ts` |

As fotos placeholder atuais são só ilustrativas (SVGs com gradiente). Basta
colocar suas fotos reais em `public/photos/` — pode usar `.jpg`, `.png` ou
`.webp` — e ajustar o caminho no `timeline.ts` (ex: `/photos/foto-real.jpg`).

Para as músicas, coloque os arquivos `.mp3` em `public/music/` e liste-os em
`src/data/music.ts` na ordem em que devem tocar.

## Efeitos incluídos

- Tela de abertura com efeito de digitação (evita bloqueio de autoplay)
- Linha do tempo estilo "constelação" — as estrelas acendem e a linha se
  desenha conforme você rola a página
- Fundo de céu estrelado animado (canvas leve)
- Galeria com hover e entrada escalonada
- Contador ao vivo de dias/horas/min/seg juntos
- Player de música flutuante com playlist
- Confete ao clicar no botão final
- Respeita `prefers-reduced-motion` e é responsivo (testado até 320px)

## Publicar de graça

**Vercel** (mais simples):
1. Suba esta pasta para um repositório no GitHub
2. Entre em [vercel.com](https://vercel.com) → "Add New Project" → selecione o repositório
3. Deploy automático, sem configuração extra

**Netlify**: mesmo processo, ou arraste a pasta gerada por `npm run build`
(fica em `dist/`) direto em [app.netlify.com/drop](https://app.netlify.com/drop).

Depois é só mandar o link pra ela 💛
