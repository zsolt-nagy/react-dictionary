import { useState } from 'react';
import './WordCard.css';

export default function WordCard({front, back, deleteWord}) {
    const [isFront, setFront] = useState(true);

    const cardContent = 
        isFront ? 
        <div className="card-front">English: {front}</div> :
        <div className="card-back">German: {back}</div>;

    const handleFlip = () => {
        setFront(!isFront);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteWord(front);
    }

    return (
        <div className="word-card" onClick={handleFlip}>
            <span className="delete-card" onClick={handleDelete}>X</span>
            {cardContent}
        </div>
    )
}

