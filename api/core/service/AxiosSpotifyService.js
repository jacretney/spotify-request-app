import Axios from 'axios';

class AxiosSpotifyService {
  constructor() {
    this.baseUrl = "https://api.spotify.com/v1";
    this.searchType = "track";
    this.auth = {};
  }

  search = async (query) => {
    if (!query) {
      return [];
    }

    try {    
      this.auth = await this.authorize();
      
      const searchUrl = `${this.baseUrl}/search?q=${query}&type=${this.searchType}`;

      const searchResults = await this.fetch(searchUrl, this.auth.access_token);
      const trackIds = this.getTrackIds(searchResults.data.tracks);
      const trackUrl = `${this.baseUrl}/tracks?ids=${trackIds.join(',')}`;

      const tracks = await this.fetch(trackUrl, this.auth.access_token);
      const formattedTracks = this.formatTracks(tracks.data.tracks);

      return formattedTracks;
    } catch(e) {
      console.log(e);

      return {
        "error": e,
        "message": "Could not return tracks"
      }
    }
  }

  fetch = async (url, token) => {
    return await Axios({
      url: url,
      method: "get",
      headers: {
          "Authorization": `Bearer ${token}`,
      },
    })
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

export default AxiosSpotifyService;