import { useState, useMemo } from 'react';
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
    const [searchQuery, setSearchQuery] = useState("");

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

    // demo wishlist data
    const games = Array.from({ length: 24 }).map((_, index) => ({
        cover: "src/assets/_missing.png",
        title: `Wishlisted Game ${index + 1}`,
        price: `$${(Math.random() * 60).toFixed(2)}`,
        wishlisted: 1,
        rating: (Math.random() * 5).toFixed(1),
        discount: Math.random() > 0.7 ? `${Math.floor(Math.random() * 70) + 10}%` : null,
        tags: [allTags[index % allTags.length], allTags[(index + 3) % allTags.length]]
    }));

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
    }

    // filter by search and tags
    const filteredGames = useMemo(() => {
        return games.filter(game => {
            const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => game.tags.includes(tag));
            return matchesSearch && matchesTags;
        })
        .sort((a, b) => {
            if (sortBy === 'price') {
                return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
            } else if (sortBy === 'rating') {
                return parseFloat(b.rating) - parseFloat(a.rating);
            } else if (sortBy === 'discount') {
                const aDiscount = a.discount ? parseInt(a.discount) : 0;
                const bDiscount = b.discount ? parseInt(b.discount) : 0;
                return bDiscount - aDiscount;
            } else if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            } else if (sortBy === 'recent') {
                return 0; // no real date so keep original order
            }
            return 0;
        });
    }, [games, searchQuery, selectedTags]);

    


    // search function
    function handleSearch(e) {
        e.preventDefault();
    }

    return (
        <div className="page-wrapper">
            <h1 className="wishlist-title">WISHLIST</h1>

            {/* search bar */}
            <form onSubmit={handleSearch} className='search-form' style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <input
                    className='search-input'
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-btn'>Search</button>
            </form>

            {/* filter buttons */}
            <div className="wishlist-filter-bar">
                {/* sort dropdown */}
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

            {/* wishlist section with tag sidebar */}
            <div className="wishlist-content">
                {/* wishlisted games grid */}
                <div className="wishlist-grid">
                    {filteredGames.map((game, index) => (
                        <GameCard key={index} game={game} />
                    ))}
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
