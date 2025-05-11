import express from 'express';
import path from 'path';
const app = express();
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Pasta com os áudios
app.use('/audios', express.static(path.join(__dirname, './assets/music')));

app.get('/musics', (req, res) => {
  res.json([
    {
      name: 'Chrystal - The Days (NOTION Remix) (slowed tiktok version) (TRADUÇÃO/LEGENDADO) PT-BR',
      audio: 'http://localhost:3000/audios/crystal.mp3',
      image: 'https://i.ytimg.com/vi/T5Pvq3Cj6eQ/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLASEjG1pq2pqqx67cGU2Hz2h0EJHA'
    },
    {
      name: 'Lil Zé - Prank (Official Music Vídeo)',
      audio: 'http://localhost:3000/audios/prank.mp3',
      image: 'https://i.ytimg.com/vi/DRh2AmHFnYs/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDQMBs3S31FFRZFZIJzl0uh9dDuAA'
    },
    {
      name: 'Matuê - O Som',
      audio: 'http://localhost:3000/audios/Som.mp3',
      image: 'https://i.ytimg.com/vi/T-h3O3djG9U/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBVsCd50ut4izuf6v0jivlfFQYu8Q'
    },
    {
      name: 'Vanessa Da Mata - Amado (Ao Vivo)',
      audio: 'http://localhost:3000/audios/amado.mp3',
      image: 'https://i.ytimg.com/vi/_CK4O1_Bvxg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBVsCd50ut4izuf6v0jivlfFQYu8Q'
    },
    {
      name: 'Djavan - Um Amor Puro (Áudio Oficial)',
      audio: 'http://localhost:3000/audios/amor_puro.mp3',
      image: 'https://i.ytimg.com/vi/Af7ieNv0wXY/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBVsCd50ut4izuf6v0jivlfFQYu8Q'
    },
    {
      name: 'Djavan - Flor Do Medo (Vaidade) [Áudio Oficial]',
      audio: 'http://localhost:3000/audios/vaidade.mp3',
      image: 'https://i.ytimg.com/vi/QwNXB_SF6rw/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAAa9D6ajXo_7P_G0pSfeJsc0qVlA'
    },
    {
      name: 'The Police - Every Breath You Take (Official Music Video)',
      audio: 'http://localhost:3000/audios/every_breath_you_take.mp3',
      image: 'https://i.ytimg.com/vi/OMOGaugKpzs/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAv_Lf4P43RdqKSjfVD3Zx8mVDBWw'
    },
    {
      name: 'd4vd - Feel It (Animated Lyric Video)',
      audio: 'http://localhost:3000/audios/feel_it.mp3',
      image: 'https://i.ytimg.com/vi/11rpGprITo0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC2PKPu4vZSJoJPMogvzWHprJJAsA'
    },
    {
      name: 'Djavan - Oceano (Ao Vivo)',
      audio: 'http://localhost:3000/audios/oceano.mp3',
      image: 'https://i.ytimg.com/vi/2kqdlAYNEzk/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKbEUW2pv1iW5v9FLXbX0Z7rjCBw'
    },
    {
      name: 'Armandinho - Outra Vida (Acústico) | Vídeo Oficial',
      audio: 'http://localhost:3000/audios/outra_vida.mp3',
      image: 'https://i.ytimg.com/vi/6BaCNYU2YR0/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgTihIMA8=&rs=AOn4CLArP9t82onY6zuzSPAxxdXEQ0rnyA'
    }
  ]);
});

app.listen(3000, () => console.log('API rodando em http://localhost:3000'));