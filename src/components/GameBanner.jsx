import './GameBanner.css';
import { useState } from 'react';

function GameBanner({ game }) {
    // init banner state
    const [wishlisted, setWishlisted] = useState(game.wishlisted);

    // banner click handler
    function onBannerClick() {
        alert(wishlisted === 1 ? "is wl" : "not wl");
    }

    // wishlist button click handler
    function onWishlistClick(e) {
        e.stopPropagation();
        setWishlisted(wishlisted === 1 ? 0 : 1);
    }

    return (
        <div className="banner-game" onClick={onBannerClick}>
            <div className="banner-cover">
                <img src={game.cover} alt={game.title} />

                <div className="banner-info-container">
                    <div className="banner-info-overlay">
                        <div className="banner-text">
                            <h3>{game.title}</h3>
                            <p>{game.price}</p>
                        </div>

                        <button
                            className={`banner-wishlist-btn ${wishlisted === 1 ? 'wishlisted' : ''}`}
                            onClick={onWishlistClick}
                        >
                            {wishlisted === 1 ? 'Wishlisted' : 'Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameBanner;
