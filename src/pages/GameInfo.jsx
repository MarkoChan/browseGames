// GameInfo.jsx
import { useState } from 'react';
import Carousel from '../components/carousel';
import '../styles/Global.css';
import '../styles/GameInfo.css';

export default function GameInfo() {
    // mock game info data
    const mediaItems = [
        <img className="carousel-img" src="/src/assets/ERNRbanner.png" alt="Nightreign screenshot 0" />,
        <img className="carousel-img" src="/src/assets/NR0.png" alt="Nightreign screenshot 1" />,
        <img className="carousel-img" src="/src/assets/NR1.png" alt="Nightreign screenshot 2" />,
        <img className="carousel-img" src="/src/assets/NR2.png" alt="Nightreign screenshot 3" />,
        <img className="carousel-img" src="/src/assets/NR3.png" alt="Nightreign screenshot 4" />
    ];

    const game = {
        title: "Elden Ring: Nightreign",
        description: "Step into the shadows of the Lands Between in this dark and atmospheric expansion. New bosses, realms, and stories await those brave enough to uncover the Nightreign.",
        price: "$39.99",
        developer: "FromSoftware",
        releaseDate: "October 2025",
        genres: ["Action RPG", "Fantasy", "Open World"],
        cover: "/src/assets/NR0.png",
    };

    return (
        <div className="gameinfo-page">
            {/* Top media banner carousel */}
            <div className="carousel-wrapper">
                <Carousel
                    items={mediaItems}
                    visibleCount={1}
                    itemWidth={1280}
                    itemHeight={700}
                    autoScroll={true}
                    scrollInterval={5000}
                />
            </div>

            {/* Game metadata and description */}
            <div className="gameinfo-content">
                <h1 className="gameinfo-title">{game.title}</h1>

                <p className="gameinfo-description">{game.description}</p>

                <div className="gameinfo-details">
                    <p><strong>Price:</strong> {game.price}</p>
                    <p><strong>Developer:</strong> {game.developer}</p>
                    <p><strong>Release Date:</strong> {game.releaseDate}</p>
                    <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
                </div>
            </div>
        </div>
    );
}
