import { useState } from 'react';
import GameCard from '../components/GameCard';
import '../styles/Global.css';
import '../styles/Home.css';
import '../styles/Wishlist.css';

export default function Wishlist() {
    // init state
    const [sortBy, setSortBy] = useState('price');
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [tagSearch, setTagSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    // init tag options
    const allTags = [
        'RPG', 'Action', 'Adventure', 'Puzzle', 'Strategy',
        'Simulation', 'Shooter', 'Horror', 'Indie', 'Multiplayer',
        'Fantasy', 'Sci-Fi', 'Survival', 'Platformer', 'Sports'
    ];

    // toggle tag selection
    function toggleTag(tag) {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    }

    // filtered tag list based on search input and selection
    const filteredTags = allTags
        .filter(tag => tag.toLowerCase().includes(tagSearch.toLowerCase()) || selectedTags.includes(tag))
        .sort((a, b) => {
            const aSelected = selectedTags.includes(a);
            const bSelected = selectedTags.includes(b);
            if (aSelected && !bSelected) return -1;
            if (!aSelected && bSelected) return 1;
            return 0;
        });

    // determine how many tags to show (selected + 5 unselected minimum)
    const visibleTagsCount = Math.max(selectedTags.length + 5, filteredTags.length);
    const tagItemHeight = 36;
    const tagListHeight = Math.min(visibleTagsCount, filteredTags.length) * tagItemHeight;

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
    function handleSort(val) {
        setSortBy(val);
        setShowSortDropdown(false);
        // add sorting here
    }

    return (
        <div className="page-wrapper">
            <h1 className="wishlist-title">WISHLIST</h1>

            {/* Search Bar */}
            <div className="wishlist-search-bar">
                <input className="searchInput" type="text" placeholder="Search..." />
                <button className="searchBtn">Search</button>
            </div>

            {/* Filter Buttons */}
            <div className="wishlist-filter-bar">
                {/* Sort Dropdown */}
                <div className="sort-dropdown-wrapper">
                    <button
                        className="searchBtn sort-button"
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                    >
                        Sort by: {sortOptions.find(o => o.value === sortBy)?.label}
                    </button>
                    {showSortDropdown && (
                        <div className="sort-dropdown">
                            {sortOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`sort-option ${sortBy === option.value ? 'selected' : ''}`}
                                    onClick={() => handleSort(option.value)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Wishlist Section with Tag Sidebar */}
            <div className="wishlist-content">
                {/* Wishlisted Games Grid */}
                <div className="wishlist-grid">
                    {wishlistedGames}
                </div>

                {/* tag filter compartment */}
                <div className="tag-filter-box">
                    <h3 className="tag-filter-title">Filter by Tags</h3>

                    {/* displayed tags */}
                    <div
                        className="tag-list"
                        style={{ maxHeight: `${tagListHeight}px` }}
                    >
                        {filteredTags.slice(0, visibleTagsCount).map(tag => (
                            <div
                                key={tag}
                                className={`tag-item ${selectedTags.includes(tag) ? 'selected' : ''}`}
                                onClick={() => toggleTag(tag)}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    {/* search bar for tags */}
                    <input
                        className="tag-search"
                        type="text"
                        placeholder="Search tags..."
                        value={tagSearch}
                        onChange={e => setTagSearch(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
