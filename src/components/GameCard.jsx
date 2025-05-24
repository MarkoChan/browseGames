import './GameCard.css'
import { useState } from 'react';

function GameCard({game}){
    const [wishlisted, setWishlisted] = useState(game.wishlisted);

    function onCardClick() {
        if (wishlisted === 1) {
            alert("is wl");
        } else {
            alert("not wl");
        }
    }

    function onWishlistClick(e) {
        e.stopPropagation();

        if (wishlisted === 1) {
            setWishlisted(0);
        } else {
            setWishlisted(1);
        }
    }

    return (
        <div className="game_card" onClick={onCardClick}>
            <div className="game_cover">
                <img src={game.cover} alt={game.title}/>
            </div>
            <div className="game_overlay">
                <button
                className={wishlisted === 1 ? "wishlist_btn_act" : "wishlist_btn_deact"}
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

            <div className="game_info" style={{ color: 'white' }}>
                <h3>{game.title}</h3>
                <p>{game.price}</p>
            </div>
        </div>
    )
}

export default GameCard