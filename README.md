## Spotify Request App

### Setup
0. Ensure you have valid Spotify API credentials
1. Create a `.env` file inside the `api` folder with appropriate details - use `.env.example` for a guide
2. Start the front end dev server using `yarn start` from the project root
3. Start the API using `nodemon ./http/server.js` from the `api` directory
4. Visit `http://localhost:3000` to use the app

### Todo - Features:
- Admin interface
- Rooms
- Submit requests

### Todo - Improvements
- Error handling
- Debounce search requests
- Ensure layout is responsive
- Improve design
- Tidy up AxiosSpotifyService implementation
- Switch to import syntax on the API
- Tests
- CI