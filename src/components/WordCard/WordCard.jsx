import { useState } from 'react';
import './WordCard.css';

export default function WordCard({front, back}) {
    const [isFront, setFront] = useState(true);

    const cardContent = 
        isFront ? 
        <div className="card-front">English: {front}</div> :
        <div className="card-back">German: {back}</div>;

    const handleClick = () => {
        setFront(!isFront);
    };

    return (
        <div className="word-card" onClick={handleClick}>
            {cardContent}
        </div>
    )
}

