import './App.css'
import GameCard from './components/GameCard'

function App() {
  return (
    <div>
      <GameCard game={{cover:"src/assets/honse.png", title:"Honse 2", price:"$2.50"}}/>
    </div>
  )
}

export default App
