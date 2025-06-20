import './GameCard.css'
import { useState } from 'react';

function GameCard({ game, scale = 1 }) {
    // init gamecard state
    const [wishlisted, setWishlisted] = useState(game.wishlisted);
    const cardStyle = {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
    };

    // game card click handler
    function onCardClick() {
        alert(wishlisted === 1 ? "is wl" : "not wl");
    }

    // wishlist button click handler
    function onWishlistClick(e) {
        e.stopPropagation();
        setWishlisted(wishlisted === 1 ? 0 : 1);
    }

    return (
        <div className="game-card" onClick={onCardClick} style={cardStyle}>
            <div className="game-cover">
                <img src={game.cover} alt={game.title} />
            </div>
            <div className="game-overlay">
                <button
                    className={`wishlist-icon-btn ${wishlisted === 1 ? 'wishlisted' : ''}`}
                    onClick={onWishlistClick}
                    aria-label="Toggle wishlist"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="32"
                        height="32"
                        aria-hidden="true"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42
                                4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81
                                14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4
                                6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
                </button>
            </div>

            <div className="game-info" style={{ color: 'white' }}>
                <h3>{game.title}</h3>
                <p>{game.price}</p>
            </div>
        </div>
    );
}

export default GameCard;
