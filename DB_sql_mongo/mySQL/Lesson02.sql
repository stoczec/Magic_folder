-- 1. Вывести сотрудников (имя, фамилия, мэйл и зарплата), которые зарабатывают больше 10000 и чье имя содержит букву o
/*select first_name, last_name, email, salary
from employees
where salary > 10000 and first_name like '%o%';*/

-- 2. Вывести названия департаментов с location_id 1700
/*select department_name
from departments
where location_id = 1700;*/
-- 3. Вывести страны у которых регион 1 или 4
/*select country_name
from countries
where region_id = 1 or region_id = 4;*/

-- Создать БД

-- create database Group_181022;
-- Выбрать БД в качестве текущей
 use Group_181022;
-- Удалить БД
-- drop database Group_181022 

-- Создать таблицу

create table users (
id integer,
firstname varchar(32),
lastname varchar(32),
avg_mark numeric(2, 1)
);

-- Удалить таблицу

drop table users1;

select * from users;

insert into users (id, firstnam, lastname, avg_mark) values(1, 'Dmytro', 'Geraschenko', 4.5)




