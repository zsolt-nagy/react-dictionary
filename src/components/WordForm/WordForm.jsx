import React, { useRef } from 'react';
import './WordForm.css';

const WordForm = ({ addWord }) => {
    const enRef = useRef(null);
    const deRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        const enField = enRef.current;
        const deField = deRef.current;

        const enValue = enField.value;
        const deValue = deField.value;

        enField.value = '';
        deField.value = '';

        addWord(enValue, deValue);
    }

    return (
        <section className="card-form">
          <h2>New Card</h2>
          <form action="#" method="GET" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                English:
                <input 
                    type="text" 
                    name="en" 
                    placeholder="English"
                    ref={enRef}
                    />
              </label>
            </div>            
            <div className="form-row">
              <label>
                German:
                <input 
                    type="text" 
                    name="de" 
                    placeholder="German"
                    ref={deRef} />
              </label>
            </div> 
            <div className="form-row">
              <button type="submit">Add Word</button>  
            </div>           
          </form>
        </section>
    )
}

export default WordForm;