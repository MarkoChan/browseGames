import GameCard from '../components/GameCard';
import Carousel from '../components/carousel';
import GameBanner from '../components/GameBanner';
import '../styles/Global.css';
import '../styles/Home.css'


export default function Home() {
    const gameBanners = [
    <GameBanner game={{ cover: "src/assets/E33banner.png", title: "Expedition 33", price: "$2.50", wishlisted: 0 }} />,
    <GameBanner game={{ cover: "src/assets/ERNRbanner.png", title: "Elden Ring: Nightreign", price: "$2.50", wishlisted: 0 }} />,
    <GameBanner game={{ cover: "src/assets/MWbanner.png", title: "Call of Duty: Modern Warfare", price: "$2.50", wishlisted: 0 }} />,
    <GameBanner game={{ cover: "src/assets/SDVbanner.png", title: "Stardew Valley", price: "$2.50", wishlisted: 0 }} />,
    <GameBanner game={{ cover: "src/assets/hadesBanner.png", title: "Hades", price: "$2.50", wishlisted: 0 }} />
    ];
    return (
        <div className="page-wrapper">
            {/* Search Bar */}
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
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
        {/* Discounted games */}
        <div className="centered-wrapper">
                <h1 className="offset-box">Discounted</h1>
            </div>
        </div>
    );
}