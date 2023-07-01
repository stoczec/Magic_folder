import { useState } from 'react';
import style from './App.module.css';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { words_data } from './data/words_data';
import { Triggers } from './components/Triggers/Triggers';
import { AddCardForm } from './components/AddCardForm/AddCardForm';

function App() {
    const [cards, setCards] = useState(words_data);
    const changeLangEng = () => {
        setCards(
            cards.map((el) => {
                el.lang = 'eng';
                return el;
            })
        );
    };
    const changeLangERus = () => {
        setCards(
            cards.map((el) => {
                el.lang = 'rus';
                return el;
            })
        );
    };
    const addCard = (card) => setCards([...cards, card]);
    return (
        <div className={style.container}>
            <AddCardForm addCard={addCard} />
            <CardsContainer cards={cards} />
            <Triggers
                changeLangEng={changeLangEng}
                changeLangERus={changeLangERus}
            />
        </div>
    );
}

export default App;
