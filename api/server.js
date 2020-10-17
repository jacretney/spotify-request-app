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
      artist: "Polaris"
    },
    {
      id: 2,
      title: "Hypermania",
      artist: "Polaris"
    },
    {
      id: 3,
      title: "Lucid",
      artist: "Polaris"
    }
  ]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})