import React from 'react';
import './WordCard.css';

export default function WordCard({front, back}) {
    const [isFront, setFront] = React.useState(true);

    const cardContent = 
        isFront ? 
        <div className="card-front">English: {front}</div> :
        <div className="card-back">German: {back}</div>;

    return (
        <div className="word-card">
            {cardContent}
        </div>
    )
}

