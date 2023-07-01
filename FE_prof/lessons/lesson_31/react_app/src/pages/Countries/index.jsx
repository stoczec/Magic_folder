import React, { useEffect, useState } from 'react';
import style from '../Countries/index.module.css';

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    await fetch('https://restcountries.com/v3.1/all').then(async (res) => {
      const data = await res.json();
      setCountries(() => {
        return [...data];
      });
    });
  };

  useEffect(() => {
    // console.log('useEffect заработал');
    getCountries();
  }, []);

  return (
    <div className={style.countries}>
      {countries.map((el, idx) => {
        console.log(el.languages);
        const {
          name: { common: contryName },
          region,
          languages,
          capital,
          flags: { png: imagePng },
        } = el;
        return (
          <a
            className={style.eachcountry}
            key={idx}
            href={`/country/${contryName}`}
          >
            <h2>{contryName}</h2>
            <img src={imagePng} alt={contryName} />
            <h3>
              Region: <p>{region}</p>
            </h3>

            {!capital ? (
              <h3 className={style.noCapital}>NO CAPITAL</h3>
            ) : capital.length === 1 ? (
              <h3 className={style.capital}>
                Capital: <p>{capital[0]}</p>
              </h3>
            ) : (
              <h3 className={style.capital}>
                Capitals: <p>{capital.map((el) => ` ${el}`)}</p>
              </h3>
            )}

            <p>Language:</p>
            {languages &&
              Object.keys(languages)?.length &&
              // поскольку поле language у меня массив 1ый эелемнт у меня короткое название языка, 2ой элеемнт у меня реальная имя языка
              Object?.entries(languages)?.map(([shortName, realName], idx) => {
                return (
                  <p key={idx}>
                    {shortName}: {realName}
                  </p>
                );
              })}
          </a>
        );
      })}
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import "./index.css";
// const Home = () => {
//   const [counter2, setCounter2] = useState(0);
//   const [counter, setCounter] = useState(0);

//   const [countries, setCountries] = useState([]);

//   const getCountires = async () => {
//     // здесь сдлелал запрос на сервер
//     await fetch("https://restcountries.com/v3.1/all").then(async (res) => {
//       // здесь переобразил json в валидную дату для дальнейшей работы
//       const data = await res.json();
//       // после переобразования мы в стейт countries передаем все страны полученные из запроса
//       setCountries(() => {
//         return [...data];
//       });
//     });
//   };

//   // будет выводить консоль лог и вызывать функцию getCountires столько раз сколько поменяли значения counter
//   // при изменении counter2 нечего работать не будет поскольку counter2 нет в зависимостях useEffect
//   //   useEffect(() => {
//   //     console.log("useEffect заработал");
//   //     getCountires();
//   //   }, [counter]);

//   // это у нас будет вызыватся столько раз пока браузер не зависнит. !!!!! Ставим []
//   //   useEffect(() => {
//   //     console.log("useEffect заработал");
//   //     getCountires();
//   //   });

//   // если у нас в зависимостях нечего нет то функция в useeffect произайдет 1 раз при первом рендере
//   useEffect(() => {
//     console.log("useEffect заработал");
//     getCountires();
//   }, []);

//   return (
//     <div className="Home">
//       {/* <button onClick={() => setCounter(counter + 1)}>Увеличить counter</button>
//       <button onClick={() => setCounter2(counter2 + 1)}>
//         Увеличить counter 2
//       </button> */}
//       {countries.map((country, idx) => {
//         // мы берем поле name, оно у нас объект где есь поле common, в нем хранится название страныц, но мы ставим алиас contryName чтобы было понятнее
//         const {
//           name: { common: contryName },
//           region,
//           languages,
//           capital,
//           flags: { png: imagePng },
//         } = country;
//         return (
//           <div className="eachcountry">
//             <img src={imagePng} alt={contryName} />

//             <p>Region: {region}</p>
//             <p>
//               {/* если у меня есть capital то используй его значение length, если capital undefined или null то нечего не делай но не показывай ошибку */}
//               {capital?.length >= 1 ? "Capital" : "Capitals"}:
//               {capital && capital?.map((capital) => capital)}
//             </p>
//             {/* делаем проверку если у меня есть массив языков то только после этого делай все операции */}
//             {languages &&
//               Object.keys(languages)?.length &&
//               // поскольку поле language у меня массив 1ый эелемнт у меня короткое название языка, 2ой элеемнт у меня реальная имя языка
//               Object?.entries(languages)?.map(([shortName, realName], idx) => {
//                 return (
//                   <p key={idx}>
//                     {shortName}:{realName}
//                   </p>
//                 );
//               })}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Home;
