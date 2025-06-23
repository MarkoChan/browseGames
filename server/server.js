import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;
const RAWG_API_KEY = 'c769e5820efe4949b6fc829fdc8066ad'

app.use(cors());
app.use(express.json());
app.get('/api/trending', async(req, res) => {
    try {
        // Make the http request
        const request = await fetch(`https://api.rawg.io/api/games?ordering=-added&page_size=12&key=${RAWG_API_KEY}`);

        const data = await request.json();
        const games = data.results.map(game => ({
            id: game.id,
            title: game.name,
            thumbnail: game.background_image,
            price: "$0.00",  // no price from RAWG api?
            wishlisted: 0
        }))

        res.json(games)
    } catch (err) {
        console.log("Failed to get RAWG (trending) data, error: ", err);
        res.status(500).json({ error: " Failed to fetch trending games "});
    }
})
app.get('/api/games', async (req, res) => {
    try {
        // Make the http request
        const rawgReq = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&page_size=10`);

        // wait for response
        const data = await rawgReq.json();

        // Convert API data to match ours
        const games = data.results.map(game => ({
            id: game.id,
            title: game.name,
            thumbnail: game.background_image,
            price: "$0.00",  // no price from RAWG api?
            wishlisted: 0
        }))

        res.json(games)
    } catch (err) {
        console.log("Failed to get RAWG data, error: ", err);
        res.status(500).json({ error: " Failed to fetch games "});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})