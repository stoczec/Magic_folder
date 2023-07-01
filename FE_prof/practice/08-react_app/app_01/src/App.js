import { Cards } from './components/Cards/Cards';

const products = [
    {
        id: 1,
        title: 'Product 1',
        price: 10.99,
        country: 'USA',
        address: {
            city: 'New York',
            street: '123 Main St',
        },
    },
    {
        id: 2,
        title: 'Product 2',
        price: 25.99,
        country: 'Canada',
        address: {
            city: 'Toronto',
            street: '456 Yonge St',
        },
    },
    {
        id: 3,
        title: 'Product 3',
        price: 5.99,
        country: 'Mexico',
        address: {
            city: 'Mexico City',
            street: '789 Avenida Reforma',
        },
    },
    {
        id: 4,
        title: 'Product 4',
        price: 99.99,
        country: 'UK',
        address: {
            city: 'London',
            street: '10 Downing St',
        },
    },
    {
        id: 5,
        title: 'Product 5',
        price: 49.99,
        country: 'Japan',
        address: {
            city: 'Tokyo',
            street: '1-1-2 Otemachi',
        },
    },
    {
        id: 6,
        title: 'Product 6',
        price: 15.99,
        country: 'France',
        address: {
            city: 'Paris',
            street: '15 Rue des Martyrs',
        },
    },
    {
        id: 7,
        title: 'Product 7',
        price: 39.99,
        country: 'Brazil',
        address: {
            city: 'Rio de Janeiro',
            street: 'Rua Barão da Torre, 500',
        },
    },
    {
        id: 8,
        title: 'Product 8',
        price: 79.99,
        country: 'Germany',
        address: {
            city: 'Berlin',
            street: 'Unter den Linden 77',
        },
    },
    {
        id: 9,
        title: 'Product 9',
        price: 8.99,
        country: 'Spain',
        address: {
            city: 'Madrid',
            street: 'Calle Gran Vía, 1',
        },
    },
    {
        id: 10,
        title: 'Product 10',
        price: 29.99,
        country: 'Australia',
        address: {
            city: 'Sydney',
            street: '100 George St',
        },
    },
];

function App() {
    return (
        <div className="App">
            {products.map((el) => (
                <Cards {...el} key={el.id} />
            ))}
        </div>
    );
}

export default App;
