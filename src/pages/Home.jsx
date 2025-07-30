import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import Carousel from '../components/carousel';
import GameBanner from '../components/GameBanner';
import VerticalSidebar from '../components/VerticalSidebar'
import '../styles/Global.css';
import '../styles/Home.css'

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

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

    // demo gamecards
    const gameCards = [
        <GameCard game={{ cover: "src/assets/honse.png", title: "Honse 2", price: "$2.50", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/cowboy.png", title: "Cowboy Man", price: "$21.50", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />,
        <GameCard game={{ cover: "src/assets/_missing.png", title: "N/A", price: "$NAN", wishlisted: 0 }} />
    ];

    // demo genres
    const genres = ["Action", "Adventure", "RPG", "Shooter", "Strategy", "Simulation", "Sports", "Racing", "Puzzle", "Platformer", "Fighting", "Horror", "MMO", "Sandbox", "Stealth", "Survival", "Rhythm", "Card Game", "Turn-Based", "Roguelike"];

    // toggle sidebar open/close
    function toggleSidebar() {
        setSidebarOpen(!sidebarOpen);
    };

    // close sidebar
    function closeSidebar() {
        setSidebarOpen(false);
    };

    // search function
    function handleSearch(e) {
         e.preventDefault(); // prevent form default submission
        // navigate to /explore with search query as URL param
        navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
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
                    <form onSubmit={handleSearch} className='search-form' style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                        <input className='search-input' type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        <button type='submit'className='search-btn'>Search</button>
                    </form>
                    
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', transform: 'scale(0.9) translateY(-50px)' }}>
                        {gameCards.map((card, index) => (
                            <div key={index} id={`card-${index}`} style={{ flex: '0 0 calc(100% / 6 - 40px)', padding: '2px' }}>
                            {card}
                            </div>
                        ))}
                    </div>
                    {/* Discounted games */}
                    <div className="centered-wrapper">
                        <h1 className="offset-box">Discounted</h1>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', transform: 'scale(0.9) translateY(-50px)' }}>
                    {gameCards.map((card, index) => (
                        <div key={index} id={`card-${index}`} style={{ flex: '0 0 calc(100% / 6 - 40px)', padding: '2px' }}>
                        {card}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
