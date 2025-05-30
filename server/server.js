import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/images', express.static('server/images'));

// Store Game Data and stuff here. For now hard code an array, but switch to a database later
const games = [
    {
        id: 1,
        title: "Honse 2",
        thumbnail: "http://localhost:3001/images/honse.png",
        price: "$2.50",
        wishlisted: 0
    },
    {
        id: 2,
        title: "Cowboy Man",
        thumbnail: "http://localhost:3001/images/cowboy.png",
        price: "$21.50",
        wishlisted: 0
    }
];

app.get('/api/games', (req, res) => {
    res.json(games)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})