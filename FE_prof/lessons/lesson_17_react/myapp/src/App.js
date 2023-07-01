import User from './components/User';
import Product from './components/Product';

function App() {
    const users = [
        {
            id: 1,
            firstname: 'Nelli',
            lastname: 'EFremyan',
            age: 28,
        },
        {
            id: 2,
            firstname: 'Anton',
            lastname: 'Petrov',
            age: 13,
        },
        {
            id: 3,
            firstname: 'Irina',
            lastname: 'Ivanova',
            age: 43,
        },
        {
            id: 4,
            firstname: 'Ivan',
            lastname: 'Sidorov',
            age: 75,
        },
    ];
    const products = [
        {
            id: 1,
            title: 'Black and white sport cap',
            price: 18.15,
            country: 'China',
        },
        {
            id: 2,
            title: 'Metal bridge sunglasses',
            price: 89.95,
            country: 'China',
        },
        {
            id: 3,
            title: 'Green baby romper',
            price: 20.4,
            country: 'China',
        },
        {
            id: 4,
            title: 'Mid-rise slim cropped fit jeans',
            price: 40.0,
            country: 'China',
        },
        {
            id: 5,
            title: 'Red dangle earrings',
            price: 29.95,
            country: 'China',
        },
        {
            id: 6,
            title: 'Baby shoes with laces',
            price: 30.6,
            country: 'China',
        },
    ];
    return (
        <div>
            <h2>Done!!!!</h2>
            <div>
                {/* <User firstname="Dmytro" lastname="Geraschenko" age="39" />
                <User firstname="Anastasia" lastname="Snizhko" age="27" />
                <User firstname="Ivan" lastname="Ivanov" age="28" />
                <User firstname="Petr" lastname="Petrov" age="28" /> */}
                {users.map((el) => (
                    <User
                        {...el}
                        key={el.id}
                        // firstname={el.firstname}
                        // lastname={el.lastname}
                        // age={el.age}
                    />
                ))}
            </div>
            <div>
                {products
                    .filter((el) => el.price > 20)
                    .map((el) => (
                        <Product {...el} key={el.id} />
                    ))}
            </div>
        </div>
    );
}

export default App;
