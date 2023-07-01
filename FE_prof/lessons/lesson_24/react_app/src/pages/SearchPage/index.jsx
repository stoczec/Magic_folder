import React, { useState } from 'react';
import axios from '../../axios';
import load from '../../assets/rainbow-spinner-loading.gif';
import style from './index.module.css';
import { Cards } from '../../components/Cards';

export const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setsearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });

  const handleChange = (event) => {
    // event.target.value - значение которое ввели в input
    setSearchValue(event.target.value);
  };

  const handleSendRequest = async () => {
    if (searchValue.trim().length) {
      setLoading(true);
      await axios
        .get(`/products/search?q=${searchValue}`)
        .then((res) => setsearchResults(() => [...res.data.products]))
        .catch((error) => {
          setError(() => {
            return {
              message: error.message,
              hasError: true,
            };
          });
        })
        .finally(() => setLoading(false));
    }
  };

  if (loading) {
    return (
      <div className={style.cards_container}>
        <img src={load} alt="loading" />
      </div>
    );
  }

  if (!loading && error.hasError) {
    return (
      <div className={style.cards_container}>
        <h1 style={{ fontSize: 50, color: 'red' }}>{error.message}</h1>
      </div>
    );
  }
  return (
    <div className={style.SearchPage}>
      <input
        type="text"
        name="searchValue"
        value={searchValue}
        onChange={handleChange}
      />
      <button disabled={!searchValue.trim().length} onClick={handleSendRequest}>
        Search
      </button>
      <div className={style.searchResults}>
        {searchResults.map((el) => (
          <Cards key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};
