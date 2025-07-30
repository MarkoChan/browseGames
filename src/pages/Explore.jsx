import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import GameCard from '../components/GameCard';
import '../styles/Global.css';
import '../styles/Home.css';
import '../styles/Wishlist.css';

export default function Explore() {
    const location = useLocation();

    // helper to get query param from URL
    function getQueryParam(param) {
        const params = new URLSearchParams(location.search);
        return params.get(param) || '';
    }

    // initialize searchQuery empty; will update after mount from URL
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setSearchQuery(getQueryParam('search'));
    }, [location.search]);

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
    const toggleTag = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    // generate demo games only once
    const allGames = useMemo(() => {
        return Array.from({ length: 24 }).map((_, i) => ({
            id: i,
            cover: "src/assets/_missing.png",
            title: `Explore Game ${i + 1}`,
            price: parseFloat((Math.random() * 60).toFixed(2)),
            wishlisted: 0,
            rating: parseFloat((Math.random() * 5).toFixed(1)),
            discount: Math.random() > 0.7 ? Math.floor(Math.random() * 70) + 10 : null,
            tags: [allTags[i % allTags.length]] // assign one tag for demo
        }));
    }, [allTags]);

    // filter and sort games based on state
    const filteredGames = useMemo(() => {
        return allGames
            .filter(game => {
                // filter by search query in title
                const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
                // filter by selected tags (if any selected)
                const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => game.tags.includes(tag));
                return matchesSearch && matchesTags;
            })
            .sort((a, b) => {
                switch(sortBy) {
                    case 'price':
                        return a.price - b.price;
                    case 'rating':
                        return b.rating - a.rating;
                    case 'discount':
                        return (b.discount || 0) - (a.discount || 0);
                    case 'title':
                        return a.title.localeCompare(b.title);
                    default:
                        return 0;
                }
            });
    }, [allGames, searchQuery, selectedTags, sortBy]);

    // determine how many tags to show (selected + 5 unselected minimum)
    const filteredTags = allTags
        .filter(tag => tag.toLowerCase().includes(tagSearch.toLowerCase()) || selectedTags.includes(tag))
        .sort((a, b) => {
            const aSelected = selectedTags.includes(a);
            const bSelected = selectedTags.includes(b);
            if (aSelected && !bSelected) return -1;
            if (!aSelected && bSelected) return 1;
            return 0;
        });

    const visibleTagsCount = Math.max(selectedTags.length + 5, filteredTags.length);
    const tagItemHeight = 36;
    const tagListHeight = Math.min(visibleTagsCount, filteredTags.length) * tagItemHeight;

    // init sort options without 'recent'
    const sortOptions = [
        { value: 'price', label: 'Price' },
        { value: 'rating', label: 'Rating' },
        { value: 'discount', label: 'Discount' },
        { value: 'title', label: 'Alphabetical' }
    ];

    // sorting logic handler
    const handleSort = (val) => {
        setSortBy(val);
        setShowSortDropdown(false);
    };

    // search submit handler
    const handleSearch = (e) => {
        e.preventDefault();
        // your search/filter is reactive so no extra logic needed here
    };

    return (
        <div className="page-wrapper">
            <h1 className="wishlist-title">EXPLORE</h1>

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

            {/* explore section with tag sidebar */}
            <div className="wishlist-content">
                {/* games grid */}
                <div className="wishlist-grid">
                    {filteredGames.map(game => (
                        <div className="card-wrapper" key={game.id}>
                            <GameCard
                                key={game.id}
                                game={{
                                    cover: game.cover,
                                    title: game.title,
                                    price: `$${game.price.toFixed(2)}`,
                                    wishlisted: game.wishlisted,
                                    rating: game.rating.toFixed(1),
                                    discount: game.discount ? `${game.discount}%` : null
                                }}
                            />
                        </div>
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
