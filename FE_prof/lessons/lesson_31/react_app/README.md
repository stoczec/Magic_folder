2. Для чего были созданы hook-и:
   --1. Когда пришло время откразыватся от классовых компонент и постепенно переходить на функциональные компоненты, возник вопрос.
   Как работать с состаянием и жизненным циклам компонента, как изменять состояния исходя от дейтвии пользователя, как делать запросы и отрисовавать их в компоненте и тд. Поэотму в начале половина компонент на прокетах была функциональная а другая половина классова. Компонент писали через классы есло надо было работать со состоянием(state) или компонент отвечал за какуюто логику, если компонент отвечал просто за отрбожение его писали через в качестве функционального компонента. Со временем появллялсь нужда использования состояния и методов жизненого цикла в функциональных компонента, поэтому были созаданы хуки, они по своей сути заменяли методы жизненного цикла и могли использоватся в функциональных компонентах, таким образом бы могли в функциональых компонентах использовать состаяние, делать запорсы и тд.

1. При каждом клике на кнопку будет увеличиваться счетчик. Однако, у вас есть два требования:

Каждое обновление счетчика должно происходить только после завершения серии кликов. Если пользователь быстро нажимает на кнопку несколько раз подряд, то счетчик должен обновиться только один раз после последнего клика.

Количество кликов должно отображаться в заголовке окна браузера, и это значение должно быть доступно для других компонентов вашего приложения.
