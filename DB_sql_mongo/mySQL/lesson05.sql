--- ПРАКТИКА
-- 1. Найти компетенции, которых нет ни у одного преподавателя
select
t1.title
from Competencies t1
left join Teachers2Competencies t2
on t1.id = t2.competencies_id
where t2.competencies_id is null ;
-- 2. Вывести название курса и имя старосты этого курса
select 
t1.title,
t2.name
from Courses t1
inner join Students t2
on t1.headman_id = t2.id;
-- 3. Вывести имя студента, курсы которые он посещает и имя старосты этого курса
select
t1.name as student_name,
t3.title,
t4.name as headman_name
from Students t1
inner join Students2Courses t2
on t1.id = t2.students_id
inner join Courses t3
on t2.course_id = t3.id
inner join Students t4
on t4.id = t3.headman_id;


--- ПРАКТИКА 2

use airport;

-- 1. Менеджеры авиакомпании потребовали выяснить количество различных моделей самолетов. 
-- Выведите все доступные модели, исключая дубликаты.
-- В выборке должен присутствовать один атрибут — model_name.

select DISTINCT model_name from airliners;
-- 2. Аналитическое подразделение решило уточнить у авиакомпании количество билетов не бизнес-класса.
-- Напишите запрос, который выведет id билетов, класс обслуживания в которых отличен от бизнес-класса (Business).
-- В выборке должен присутствовать один атрибут —  id.
select id 
from tickets
where service_class != 'Business';
-- 3. Определите id рейсов, которые должны были вылететь из аэропорта Домодедово (DME), но были отменены.
-- В выборке должен присутствовать один атрибут — id.
select
*
from trips
where departure = 'DME' and status = 'Cancelled';
-- 4. Определите имена и фамилии пассажиров, чьи идентификаторы заканчиваются на RCB или FCV, а номера телефонов не начинаются на +705.
-- В выборке должен присутствовать один атрибут — name.
select * from clients;
select
name
from clients
where  (id like '%RCB' or id like '%FCV') and phone not like '+705%';
-- 5. Найдите коды всех рейсов, которые прибыли в пункт назначения и идентификатор которых начинаются на 'Y'. 
-- Название столбца в выборке должно быть flight. Отсортируйте выборку по коду рейса в порядке возрастания.
-- В выборке должен присутствовать один атрибут — flight.
select * from trips;
select
trip_code as flight
from trips
where id like 'Y%' and status = 'Arrived'
order by trip_code;
-- 6. Выведите список имен пассажиров, чей рейс был отложен. Предусмотрите в выборке аэропорт отправления.
-- В выборке должно присутствовать два атрибута — name, departure.
select * from clients;
select
 t1.name,
    t3.departure
from clients t1
inner join tickets t2
on t1.id = t2.client_id
inner join trips t3
on t2.trip_id = t3.id
where t3.status = 'Delayed';
-- 7. Определитель модель самолета, который не совершил ни одного рейса.
-- В выборке должен присутствовать один атрибут — model_name.
select * from airliners;
select * from clients;
select * from tickets;
select * from trips;

select
t1.model_name
from airliners t1
left join trips t2
on t1.id=t2.airliner_id
where t2.trip_code is null;
-- 8. Определите имена пассажиров и цену билета, класс обслуживания который эконом-премиум.
-- В выборке должно присутствовать два атрибута — name, price.
select
t1.name,
t2.price
from clients t1
inner join tickets t2
on t1.id = t2.client_id
where t2.service_class = 'PremiumEconomy';

-- ДЗ
-- 1. Отсортируйте данные о билетах в зависимости от цены по возрастанию. В выборке должны присутствовать три атрибута — id, trip_id, price.
-- 2. Отсортируйте данные о билетах в зависимости от цены по возрастанию. Если некоторые билеты имеют одинаковую цену, отсортируйте вхождения по trip_id по убыванию. Если и цена, и trip_id одинаковые, отсортируйте вхождения по номеру билета по возрастанию. В выборке должны присутствовать три атрибута — id, trip_id, price.
-- 3. Определите модели самолетов, максимальная дальность полета которых находится в диапазоне от 4200 до 7900 включительно. В выборке должен присутствовать один атрибут —  model_name.
-- 4. Напишите запрос, который выведет id клиентов, чье значение атрибута name начинается на Daria. В выборке должен присутствовать один атрибут — id.
-- 5. Определите билеты бизнес-класса, цена которых не находится в диапазоне от 9100 до 70 400 включительно. В выборке должны присутствовать два атрибута — id и price.
-- 6. Выведите идентификаторы и коды перелета для рейсов, использующих самолеты с идентификаторами 00095579, 00045877 и 00619341. Отсортируйте вхождения по коду аэропорта назначения в порядке возрастания. При одинаковых аэропортах назначения отсортируйте по коду перелета в порядке убывания. В выборке должны присутствовать два атрибута — id, trip_code.







