const Axios = require('axios');

class AxiosSpotifyService {
  static search = async (query) => {
    return [
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
    ]
  }
}

module.exports = AxiosSpotifyService;