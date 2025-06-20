import {useState} from 'react';
import './VerticalSidebar.css';

function VerticalSidebar({
    text_list = [],
    bar_width = 210
}){
    // init state
    const [selectedGenre, setSelectedGenre] = useState(null);
    
    // toggle item in sidebar
    function handleItemClick(clickedItem) {
        setSelectedGenre(clickedItem)
    }

    return (
        <div class="outer">
            <div class="inner">
                <div className='sidebar-container' style={{width: `${bar_width}px`}}>
                    {text_list.map((item) => (
                        <div className={`sidebar-item ${selectedGenre === item ? 'active' : ''}`} onClick={() => handleItemClick(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VerticalSidebar