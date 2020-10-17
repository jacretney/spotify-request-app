const Axios = require('axios');

class AxiosSpotifyService {
  search = async (query) => {
    const auth = await this.authorize();
    const type = "track"; // TODO: Should this be configurable?
    const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
    console.log(url);

    const result = await Axios({
      url: `https://api.spotify.com/v1/search?q=${query}&type=${type}`,
      method: "get",
      headers: {
          "Authorization": `Bearer ${auth.access_token}`,
      },
  })

    return result.data;
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