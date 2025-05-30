import { useEffect, useState } from 'react';
import './App.css'
import GameCard from './components/GameCard'

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    console.log("test");
    fetch('http://localhost:3001/api/games')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error("Fetch error:", err));
  }, [])

  return (
    <div>
      <table>
        <tbody>
          <tr>
            {games.map((game) => (
              <th key={game.id}>
                <GameCard game={game} />
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App
