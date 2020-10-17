const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(cors());


app.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Masochist",
      artist: "Polaris",
      img: "https://i.scdn.co/image/ab67616d00001e02fd9d0b51b8009920a7227d04"
    },
    {
      id: 2,
      title: "Hypermania",
      artist: "Polaris",
      img: "https://i.scdn.co/image/ab67616d00001e02fd9d0b51b8009920a7227d04"
    },
    {
      id: 3,
      title: "Lucid",
      artist: "Polaris",
      img: "https://i.scdn.co/image/ab67616d00001e02fd9d0b51b8009920a7227d04"
    }
  ]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})