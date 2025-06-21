import { useState } from 'react';
import GameCard from '../components/GameCard';
import '../styles/Global.css';
import '../styles/Home.css';

export default function Wishlist() {
    // init state
    const [sortBy, setSortBy] = useState('price');
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    // demo data
    const wishlistedGames = Array.from({ length: 24 }).map((_, index) => (
        <GameCard
            key={index}
            game={{
                cover: "src/assets/_missing.png",
                title: `Wishlisted Game ${index + 1}`,
                price: `$${(Math.random() * 60).toFixed(2)}`,
                wishlisted: 1,
                rating: (Math.random() * 5).toFixed(1),
                discount: Math.random() > 0.7 ? `${Math.floor(Math.random() * 70) + 10}%` : null
            }}
        />
    ));

    // init sort options
    const sortOptions = [
        { value: 'price', label: 'Price' },
        { value: 'rating', label: 'Rating' },
        { value: 'discount', label: 'Discount' },
        { value: 'title', label: 'Alphabetical' },
        { value: 'recent', label: 'Recently Added' }
    ];

    // sorting logic
    function handleSort(val){
        
    }

    return (
        <div className="page-wrapper">
            <h1 style={{ fontSize: '6.5rem', marginTop: '30px'}}>WISHLIST</h1>
            {/* Search Bar */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <input className="searchInput" type="text" placeholder="Search..." />
                <button className="searchBtn">Search</button>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', position: 'relative' }}>
                <button className="searchBtn" style={{ padding: '10px 20px' }}>Search by tags</button>
                
                {/* Sort Dropdown */}
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <button 
                        className="searchBtn" 
                        style={{ padding: '10px 20px' }}
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                    >
                        Sort by: {sortOptions.find(o => o.value === sortBy)?.label}
                    </button>
                    {showSortDropdown && (
                        <div style={{
                            position: 'absolute',
                            backgroundColor: '#1a1a1a',
                            minWidth: '160px',
                            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                            zIndex: 1,
                            borderRadius: '4px',
                            overflow: 'hidden',
                            right: 0
                        }}>
                            {sortOptions.map((option) => (
                                <div
                                    key={option.value}
                                    style={{
                                        padding: '12px 16px',
                                        cursor: 'pointer',
                                        color: sortBy === option.value ? '#fff' : '#aaa',
                                        backgroundColor: sortBy === option.value ? '#333' : 'transparent',
                                        fontWeight: sortBy === option.value ? 'bold' : 'normal'
                                    }}
                                    onClick={() => handleSort(option.value)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Wishlisted Games Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    padding: '40px',
                    justifyItems: 'center',
                }}
            >
                {wishlistedGames}
            </div>
        </div>
    );
}