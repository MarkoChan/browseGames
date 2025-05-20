import './GameCard.css'

function GameCard({game}){

    function onWishlistClick(){
        alert("clicked")
    }

    return (
        <div
            className="game_card"
                style={{
                    backgroundColor: 'rgb(50, 70, 90)',
                    padding: '16px',
                    borderRadius: '12px'
                }}>
            <div className='game_cover'>
                <img src={game.cover} alt={game.title} width={200} height={200}/>
                <div className='game_overlay'>
                    <button className='wishlist_btn' onClick={onWishlistClick}>❤</button>
                </div>
            </div>
            <div className='game_info' style = {{color : 'white'}}>
                <h3>{game.title}</h3>
                <p>{game.price}</p>
            </div>
        </div>
    )
}

export default GameCard