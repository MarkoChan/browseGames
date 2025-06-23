import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import Carousel from '../components/carousel';
import GameBanner from '../components/GameBanner';
import VerticalSidebar from '../components/VerticalSidebar'
import '../styles/Global.css';
import '../styles/Home.css'

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [trendingGames, setTrendingGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/trending')
          .then(res => res.json())
          .then(data => setTrendingGames(data))
          .catch(err => console.error("Error fetching games:", err));
      }, []);

    const row1 = trendingGames.slice(0, 6);
    const row2 = trendingGames.slice(6, 12);

    // demo banners
    const gameBanners = [
        <GameBanner game={{ cover: "src/assets/E33banner.png", title: "Clair Obscur: Expedition 33", price: "$2.50", wishlisted: 0 }} />,
        <Link to="/gameinfo">
        <GameBanner game={{ cover: "src/assets/ERNRbanner.png", title: "Elden Ring: Nightreign", price: "$2.50", wishlisted: 0 }} />
        </Link>,
        <GameBanner game={{ cover: "src/assets/MWbanner.png", title: "Call of Duty: Modern Warfare", price: "$2.50", wishlisted: 0 }} />,
        <GameBanner game={{ cover: "src/assets/SDVbanner.png", title: "Stardew Valley", price: "$2.50", wishlisted: 0 }} />,
        <GameBanner game={{ cover: "src/assets/hadesBanner.png", title: "Hades", price: "$2.50", wishlisted: 0 }} />
    ];

    // demo genres
    const genres = ["Action", "Adventure", "RPG", "Shooter", "Strategy", "Simulation", "Sports", "Racing", "Puzzle", "Platformer", "Fighting", "Horror", "MMO", "Sandbox", "Stealth", "Survival", "Rhythm", "Card Game", "Turn-Based", "Roguelike"];

    // Toggle sidebar open/close
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Close sidebar
    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="page-wrapper">
            <div className='layout'>
                {/* Sidebar overlay */}
                <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

                {/* Sidebar panel */}
                <aside className={`sidebar-panel ${sidebarOpen ? 'open' : ''}`}>
                    <button className="sidebar-close-btn" onClick={closeSidebar} aria-label="Close Sidebar">
                        &times;
                    </button>
                    <VerticalSidebar text_list={genres} />
                </aside>

                <div className='main'>
                    {/* Hamburger Button */}
                    <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Open Sidebar">
                        &#9776;
                    </button>

                    {/* Search Bar */}
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                        <input className='searchInput' type="text" placeholder="Search..." />
                        <button className='searchBtn'>Search</button>
                    </div>
                    <br></br>
                    {/* Game banner Carousel */}
                    <div className="centered-wrapper">
                        <Carousel
                            items={gameBanners}
                            visibleCount={1}
                            itemWidth={1280}
                            itemHeight={700}
                            autoScroll={true}
                            scrollInterval={4000}
                        />
                    </div>
                    {/* Trending games */}
                    <div className="centered-wrapper">
                        <h1 className="offset-box">Trending</h1>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', transform: 'scale(0.9) translateY(-50px)' }}>
                        <table>
                            <tbody>
                                <tr>
                                    {row1.map((game) => (
                                        <th key={game.id}>
                                            <GameCard game ={{ cover: game.thumbnail, title: game.title, price: game.price, wishlisted: game.wishlisted }} />
                                        </th>
                                    ))}
                                </tr>
                                <tr>
                                {row2.map((game) => (
                                        <th key={game.id}>
                                            <GameCard game ={{ cover: game.thumbnail, title: game.title, price: game.price, wishlisted: game.wishlisted }} />
                                        </th>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Discounted games */}
                    <div className="centered-wrapper">
                        <h1 className="offset-box">Discounted</h1>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', transform: 'scale(0.9) translateY(-50px)' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <th><GameCard game={{ cover: "src/assets/honse.png", title: "Honse 2", price: "$2.50", wishlisted: 0 }} /></th>
                                    <th><GameCard game={{ cover: "src/assets/cowboy.png", title: "Cowboy Man", price: "$21.50", wishlisted: 0 }} /></th>
                                    <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
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
                                    <th><GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} /></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
