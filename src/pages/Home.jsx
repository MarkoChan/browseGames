import GameCard from '../components/GameCard';
import '../styles/Global.css';
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="page-wrapper">
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <input className='searchInput' type="text" placeholder="Search..." />
            <button className='searchBtn'>Search</button>
        </div>
        <div className="centered-wrapper">
            <h1 className="offset-box">Trending Games</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <table>
            <tr>
            <th><GameCard game={{ cover: "src/assets/honse.png", title: "Honse 2", price: "$2.50", wishlisted: 0 }} /></th>
            <th><GameCard game={{ cover: "src/assets/cowboy.png", title: "Cowboy Man", price: "$21.50", wishlisted: 0 }} /></th>
            <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
            <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
            <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
            </tr>
            <tr>
            <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
            <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
            <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
            <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
            <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
            </tr>
        </table>
        </div>
       <div className="centered-wrapper">
            <h1 className="offset-box">Discounted Games</h1>
        </div>
    </div>
  );
}