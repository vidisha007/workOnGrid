import React,{ useRef, useEffect } from 'react';
import Sidebar from './Sidebar';

const ReactGridLayout = ({ columns, numBoxes }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const boxNumber = entry.target.getAttribute('data-box-number');
          console.log(`${boxNumber} WAS CALLED`);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const boxItems = [];

  for (let i = 0; i < numBoxes; i++) {
    boxItems.push(
      <div key={i} className="grid-box" data-box-number={i + 1}>
        {`${i + 1}`}
      </div>
    );
  }

  return (
    <div>
    <div className="body-container">
    <div className="sidebar-container"><Sidebar/></div>
    <div className="grid-container" style={{ gridTemplateColumns: `repeat(${columns}, 6fr)` }} ref={gridRef}>
      {boxItems}
    </div>
    </div>
    </div>
  );
};

export default ReactGridLayout;

