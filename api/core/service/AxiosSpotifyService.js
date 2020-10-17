const Axios = require('axios');

class AxiosSpotifyService {
  search = async (query) => {
    if (!query) {
      return [];
    }

    const auth = await this.authorize();
    const type = "track"; // TODO: Should this be configurable?

    const result = await Axios({
      url: `https://api.spotify.com/v1/search?q=${query}&type=${type}`,
      method: "get",
      headers: {
          "Authorization": `Bearer ${auth.access_token}`,
      },
    })

    const trackIds = this.getTrackIds(result.data.tracks);

    const tracks = await Axios({
      url: `https://api.spotify.com/v1/tracks?ids=${trackIds.join(',')}`,
      method: "get",
      headers: {
          "Authorization": `Bearer ${auth.access_token}`,
      },
    })

    const formattedTracks = this.formatTracks(tracks.data.tracks);
    return formattedTracks;
  }

  getTrackIds = (data) => {
    return data.items.map((track) => {
      return track.id;
    })
  }

  formatTracks = (data) => {
    return data.map((track, index) => {
      return {
        "id": index,
        "spotify_id": track.id,
        "title": track.name,
        "artist": {
          "name": track.artists[0].name,
          "href": track.artists[0].external_urls.spotify
        },
        "album": {
          "name": track.album.name,
          "href": track.album.external_urls.spotify,
          "images": track.album.images,
        }
      }
    })
  }

  authorize = async () => {
    const id = process.env.SPOTIFY_CLIENT_ID;
    const secret = process.env.SPOTIFY_SECRET_KEY;

    const result = await Axios({
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      params: {
          grant_type: "client_credentials"
      },
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
      },
      auth: {
          username: id,
          password: secret
      }
  })

    return result.data;
  }
}

module.exports = AxiosSpotifyService;