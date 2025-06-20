import React, { useRef, useEffect, useState } from 'react';
import './Carousel.css';

function Carousel({
  items = [],
  visibleCount = 3,
  itemWidth = 200,
  itemHeight = 300,
  autoScroll = true,
  scrollInterval = 3000
}) {
  // init element ref
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // calc carousel width + height
  const gapSize = 16;
  const wrapperWidth = itemWidth * visibleCount + gapSize * (visibleCount - 1) + 100;
  const wrapperHeight = itemHeight;

  // total item count (excluding clones)
  const totalItems = items.length;

  // clone items for infinite loop
  const clonedStart = items.slice(-visibleCount); // last items to show before start
  const clonedEnd = items.slice(0, visibleCount); // first items to show after end
  const allItems = [...clonedStart, ...items, ...clonedEnd];

  // calc scroll amount
  function scrollByAmount() {
    if (!trackRef.current) return 0;
    return itemWidth + gapSize;
  }

  // scroll carousel right
  function scrollNext() {
    const track = trackRef.current;
    const maxScroll = scrollByAmount() * (totalItems + visibleCount);

    track.scrollBy({ left: scrollByAmount() * visibleCount, behavior: 'smooth' });

    setTimeout(() => {
      if (track.scrollLeft >= maxScroll) {
        // jump back to original first item
        track.scrollTo({ left: scrollByAmount() * visibleCount, behavior: 'auto' });
      }
    }, 350);
  }

  // scroll carousel left
  function scrollPrev() {
    const track = trackRef.current;

    track.scrollBy({ left: -scrollByAmount() * visibleCount, behavior: 'smooth' });

    setTimeout(() => {
      if (track.scrollLeft <= 0) {
        // jump to last real set of items
        const jumpTo = scrollByAmount() * totalItems;
        track.scrollTo({ left: jumpTo, behavior: 'auto' });
      }
    }, 350);
  }

  // set initial scroll position to first real item
  useEffect(() => {
    const initialOffset = scrollByAmount() * visibleCount;
    trackRef.current?.scrollTo({ left: initialOffset });
  }, []);

  // autoscroll logic
  function handleAutoScroll() {
    if (!isHovered) {
      scrollNext();
    }
  }

  useEffect(() => {
    // autoscroll disabled
    if (!autoScroll) return;

    // scroll interval
    const interval = setInterval(handleAutoScroll, scrollInterval);

    // cleanup
    return () => {
      clearInterval(interval);
    };
  }, [isHovered, autoScroll, scrollInterval]);

  return (
    <div
      className="carousel-wrapper"
      style={{ width: `${wrapperWidth}px`, height: `${wrapperHeight}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="carousel-arrow left" onClick={scrollPrev}>
        &#8592;
      </button>
      <div className="carousel-container" ref={trackRef}>
        <div className="carousel-track" style={{ gap: `${gapSize}px` }}>
          {allItems.map((item, index) => (
            <div
              className="carousel-item"
              key={index}
              style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
            >
              <div className="carousel-item-inner">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-arrow right" onClick={scrollNext}>
        &#8594;
      </button>
    </div>
  );
}

export default Carousel;
