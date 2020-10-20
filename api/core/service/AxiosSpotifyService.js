import Axios from 'axios';

class AxiosSpotifyService {
  constructor() {
    this.baseUrl = 'https://api.spotify.com/v1';
    this.searchType = 'track';
    this.auth = {};
  }

  async search(query) {
    if (!query) {
      return [];
    }

    try {
      this.auth = await AxiosSpotifyService.authorize();

      const searchUrl = `${this.baseUrl}/search?q=${query}&type=${this.searchType}`;

      const searchResults = await AxiosSpotifyService.fetch(searchUrl, this.auth.access_token);
      const trackIds = AxiosSpotifyService.getTrackIds(searchResults.data.tracks);
      const trackUrl = `${this.baseUrl}/tracks?ids=${trackIds.join(',')}`;

      const tracks = await AxiosSpotifyService.fetch(trackUrl, this.auth.access_token);
      const formattedTracks = AxiosSpotifyService.formatTracks(tracks.data.tracks);

      return formattedTracks;
    } catch (e) {
      return {
        error: e,
        message: 'Could not return tracks',
      };
    }
  }

  static fetch(url, token) {
    return Axios({
      url,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static getTrackIds(data) {
    return data.items.map((track) => track.id);
  }

  static formatTracks(data) {
    return data.map((track, index) => ({
      id: index,
      spotify_id: track.id,
      title: track.name,
      artist: {
        name: track.artists[0].name,
        href: track.artists[0].external_urls.spotify,
      },
      album: {
        name: track.album.name,
        href: track.album.external_urls.spotify,
        images: track.album.images,
      },
    }));
  }

  static async authorize() {
    const id = process.env.SPOTIFY_CLIENT_ID;
    const secret = process.env.SPOTIFY_SECRET_KEY;

    const result = await Axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      params: {
        grant_type: 'client_credentials',
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: id,
        password: secret,
      },
    });

    return result.data;
  }
}

export default AxiosSpotifyService;
