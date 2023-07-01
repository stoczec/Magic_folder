import './App.css';
import { AddProductForm } from './components/AddProductForm';
import { AddWordForm } from './components/AddWordForm';
import { ProductsContainer } from './components/ProductsContainer';
import { WordsContainer } from './components/WordsContainer';
import { Context } from './context';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <AddProductForm></AddProductForm>
      <ProductsContainer />
      <AddWordForm />
      <WordsContainer />
    </div>
  );
}

export default App;
