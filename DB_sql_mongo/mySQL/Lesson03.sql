
drop table if exists goods;

create table goods (
	id integer primary key auto_increment,
    title varchar(64),
    quantity integer check (quantity between 10 and 20),
    price numeric(5, 2) check (price > 20)
);

select * from goods;

insert into goods 
(title, quantity, price) values 
('apple', 14, 100.55),
('orange', 10, 23.98),
('pineapple', 17, 22.67);
                                                        
insert into 
goods(title, price) values 
('apple', 100.55); 

-- Констрейнты (ограничения) / constraints
-- NOT NULL - запрещает создавать строку со значением null в указанном поле
-- UNIQUE - значение в поле должно быть уникальным
-- PRIMARY KEY - not null + unique
-- CHECK - проверяет соответствует ли введенное значение условию    

-- auto_increment

-- УДАЛЕНИЕ ДАННЫХ

-- УДАЛИТЬ СТРОКИ ПО УСЛОВИЮ
delete from goods
where price >= 14;

-- УДАЛИТЬ ВСЕ СТРОКИ (очистить таблицу)
delete from goods;

-- УДАЛИТЬ ВСЕ СТРОКИ (сбросить таблицу до изначального состояния)
truncate goods;

-- РАЗРЕШИТЬ УДАЛЕНИЕ. ЗНАЧЕНИЕ 1 - ЗАПРЕТИТ. ОТКЛЮЧИТЬ БЕЗОПАСНЫЙ РЕЖИМ. (delete and update)
set sql_safe_updates = 0;


-- ИЗМЕНЕНИЕ ДАННЫХ

update goods
set quantity = 17, price = 90
where title = 'apple';

-- ALTER TABLE - ИЗМЕНЕНИЕ ПОЛЕЙ

-- Добавить новое поле

alter table goods
add country varchar(64);

-- Удалить поле

alter table goods
drop column country;

-- Изменить поле (изменить тип данных)

alter table goods
modify column price numeric(6,2);

-- Изменение имени поля

alter table goods
change title product_title varchar(64);

alter table goods
rename column product_title to product;

-- Удалить констрейт

alter table goods
drop check goods_chk_2;

-- Добавить констрейт

alter table goods
add constraint custom_check check (price > 20);





select * from goods;          


-- ПРАКТИКА
-- 1. Создайте таблицу goods 
-- id целое число первичный ключ авто-инкремент, 
-- title строка 128, 
-- quantity целое число, допустимые значения от 0 до 10
drop table if exists goods;
create table goods(
	id integer primary key auto_increment,
    title varchar(128),
    quantity integer check (quantity between 0 and 10)
);

-- 2. Заполнить 5 строками
insert into goods 
(title, quantity) values 
('apple', 9),
('orange', 10),
('pineapple', 2),
('banana', 7),
('kiwi', 1);
-- 3. Добавить поле price (целое число) со значением по умолчанию 10
alter table goods
add price int default 10;
-- 4. Изменить тип данных price на numeric(8, 2). Перед изменением типа данных необходимо очистить поле
update goods
set price = null; 

alter table goods
modify column price numeric(8,2);

-- 5. Переименовать поле price на item_price
alter table goods
rename column price to item_price;
-- 6. Удалить это поле (item_price)
alter table goods
drop column item_price;

-- ПРАКТИКА 2
-- 1. Создать таблицу students с полями

-- name (не null)
-- lastname (не null)
-- avg_mark (от 0 до 5)
-- gender varchar(128) (или “M” или “F”)

-- 2. Добавить 5 записей студентов

-- Oleg Petrov 4.3 M
-- Semen Stepanov 3.1 M 
-- Olga Semenova 4.7 F 
-- Igor Romanov 3.1 M 
-- Irina Ivanova 2.2 F


create table students (
name varchar(64) not null,
lastname varchar(64) not null,
avg_mark numeric(2, 1) check (avg_mark between 0 and 5),
gender varchar(128) check (gender like 'M' or gender like 'F') -- check(gender in('M', 'F')
);

insert into students
(name, lastname, avg_mark, gender) values
('Oleg', 'Petrov', 4.3, 'M'),
('Semen', 'Stepanov', 3.1, 'M'),
('Olga', 'Semenova', 4.7, 'F'),
('Igor', 'Romanov', 3.1, 'M'),
('Irina', 'Ivanova', 2.2, 'F');

-- 3. Добавить поле id целое число первичный ключ авто-инкремент
alter table students
add id int primary key auto_increment;
-- 4. Поменять тип у gender на char(1)
alter table students
modify column gender char(1);

-- ДЗ
-- 1. Переименовать поле name на firstname
alter table students
rename column name to firstname;
-- 2. Выборки
-- найти учеников, у которых оценка больше 4
select firstname, lastname, avg_mark from students
where avg_mark > 4;
-- найти учеников, у которых не входит в диапазон от 3 до 4
select firstname, lastname, avg_mark from students
where avg_mark not between 3 and 4;
-- найти учеников, у которых имя начинается на И
select firstname, lastname from students
where firstname like 'I%';
-- найти учеников, у которых оценка 2.2 или 3.1 или 4.7
select firstname, lastname, avg_mark from students
where avg_mark in (2.2, 3.1, 4.7);
-- 3. *Увеличить всем учащимся оценку в 10 раз
alter table students
drop check students_chk_1;

alter table students
modify column avg_mark numeric(3,1); 

update students
set avg_mark = avg_mark * 10
where avg_mark is not null;
-- 4. Поменять у Олега Петрова фамилию на Сидоров
update students
set lastname = 'Sidorov'
where firstname = 'Oleg';
-- 5. Для всех учеников, у которых оценка не больше 31, увеличить оценку на 10
alter table students
modify column avg_mark numeric(4,1);

update students
set avg_mark = avg_mark * 10
where avg_mark > 31;
use Group_181022;
select * from students;  