import './App.css'
import GameCard from './components/GameCard'

function App() {
  return (
    <div>
      <table>
        <tr>
            <th><GameCard game={{cover:"src/assets/honse.png", title:"Honse 2", price:"$2.50", wishlisted: 0}}/></th>
            <th><GameCard game={{cover:"src/assets/cowboy.png", title:"Cowboy Man", price:"$21.50", wishlisted: 0}}/></th>
            <th><GameCard game={{cover:"src/assets/_missing.png", title:"N/A", price:"$NAN", wishlisted: 0}}/></th>
            <th><GameCard game={{cover:"src/assets/_missing.png", title:"N/A", price:"$NAN", wishlisted: 0}}/></th>
            <th><GameCard game={{cover:"src/assets/_missing.png", title:"N/A", price:"$NAN", wishlisted: 0}}/></th>
        </tr>
        <tr>
            <th><GameCard game={{cover:"src/assets/_missing.png", title:"N/A", price:"$NAN", wishlisted: 0}}/></th>
            <th><GameCard game={{cover:"src/assets/_missing.png", title:"N/A", price:"$NAN", wishlisted: 0}}/></th>
            <th><GameCard game={{cover:"src/assets/_missing.png", title:"N/A", price:"$NAN", wishlisted: 0}}/></th>
            <th><GameCard game={{cover:"src/assets/_missing.png", title:"N/A", price:"$NAN", wishlisted: 0}}/></th>
            <th><GameCard game={{cover:"src/assets/_missing.png", title:"N/A", price:"$NAN", wishlisted: 0}}/></th>
        </tr>
      </table>
    </div>
  )
}

export default App
