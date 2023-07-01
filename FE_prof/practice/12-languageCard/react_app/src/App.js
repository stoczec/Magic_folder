import './App.css';
import { useState } from 'react';
import { words_data } from './data/words_data';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { Triggers } from './components/Triggers/Triggers';
import { AddCardForm } from './components/AddCardForm/AddCardForm';

function App() {
  const [cards, setCards] = useState(words_data);
  const changeLangAllRus = () =>
    setCards(
      cards.map((el) => {
        el.lang = 'rus';
        return el;
      })
    );
  const changeLangAllEng = () =>
    setCards(
      cards.map((el) => {
        el.lang = 'eng';
        return el;
      })
    );
  const changeLangAllDe = () =>
    setCards(
      cards.map((el) => {
        el.lang = 'de';
        return el;
      })
    );
  const addCard = (card) => setCards([...cards, card]);
  const changeLang = (id) =>
    setCards(
      cards.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            lang: el.lang === 'rus' ? 'eng' : el.lang === 'eng' ? 'de' : 'rus',
          };
        }
        return el;
      })
    );
  const deleteCard = (id) => setCards(cards.filter((el) => el.id !== id));

  return (
    <div className="container">
      <AddCardForm addCard={addCard} />
      <CardsContainer
        cards={cards}
        changeLang={changeLang}
        deleteCard={deleteCard}
      />
      <Triggers
        changeLangAllRus={changeLangAllRus}
        changeLangAllEng={changeLangAllEng}
        changeLangAllDe={changeLangAllDe}
      />
    </div>
  );
}

export default App;
