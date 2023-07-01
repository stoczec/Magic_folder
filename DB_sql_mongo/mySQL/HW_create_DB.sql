-- 1. Создать БД University
create database Univercity;
use univercity;
-- 2. Создать таблицы

/*1) создать таблицу Students
- id целое число первичный ключ автоинкремент
- name строка 128 не null
- age целое число*/
create table Students(
id integer primary key auto_increment,
name varchar(128) not null,
age integer
);
/*2) создать таблицу Teachers
- id целое число первичный ключ автоинкремент
- name строка 128 не null
- age целое число*/
create table Teachers(
id integer primary key auto_increment,
name varchar(128)not null,
age integer
);
/*3) создать таблицу Competencies
- id целое число первичный ключ автоинкремент
- title строка 128 не null*/
create table Competencies(
id integer primary key auto_increment,
title varchar(128) not null
);
/*4) создать таблицу Teachers2Competencies
- id целое число первичный ключ автоинкремент
- teacher_id целое число
- competencies_id целое число*/
create table Teachers2Competencies(
id integer primary key auto_increment,
teacher_id integer,
competencies_id integer
);
/*5) создать таблицу Courses
- id целое число первичный ключ автоинкремент
- teacher_id целое число
- title строка 128 не null
- headman_id целое число*/
create table Courses(
id integer primary key auto_increment,
teacher_id integer,
title varchar(128) not null,
headman_id integer
);
/*6) создать таблицу Students2Courses
- id целое число первичный ключ автоинкремент
- student_id целое число
- course_id целое число*/
create table Students2Courses(
id integer primary key auto_increment,
students_id integer,
course_id integer
);
-- 3. Заполнить таблицы

/*Добавить 6 записей в таблицу Students
Анатолий 29
Олег 25
Семен 27
Олеся 28
Ольга 31
Иван 22*/
insert into Students (name, age)
 values ('Анатолий', 29), ('Олег', 25), ('Семен', 27), ('Олеся', 28), ('Ольга', 31), ('Иван', 22);
/*Добавить 6 записей в таблицу Teachers
Петр 39
Максим 35
Антон 37
Всеволод 38
Егор 41
Светлана 32*/
insert into Teachers (name,age)
 values ('Петр', 39), ('Максим', 35), ('Антон', 37), ('Всеволод', 38), ('Егор', 41), ('Светлана', 32);
/*Добавить 4 записей в таблицу Competencies
Математика
Информатика
Программирование
Графика*/
insert into Competencies (title)
 values ('Математика'),('Информатика'),('Программирование'),('Графика');
 /*Добавьте 6 записей в таблицу Teachers2Competencies
1 1
2 1
2 3
3 2
4 1
5 3*/
insert into Teachers2Competencies (teacher_id, competencies_id)
 values (1, 1), (2, 1), (2, 3), (3, 2), (4, 1), (5, 3);
/*Добавьте 5 записей в таблицу Courses
1 Алгебра логики 2
2 Математическая статистика 3
4 Высшая математика 5
5 Javascript 1
5 Базовый Python 1*/
insert into Courses (teacher_id, title, headman_id)
 values (1, 'Алгебра логики', 2), (2, 'Математическая статистика', 3), (4, 'Высшая математика', 5), (5, 'Javascript', 1),(5, 'Базовый Python', 1);
/*Добавьте 5 записей в таблицу Students2Courses
1 1
2 1
3 2
3 3
4 5*/
insert into Students2Courses (students_id, course_id)
 values (1, 1), (2, 1), (3, 2), (3, 3), (4, 5);

-- 4. Вывести имена студентов и курсы, которые они проходят
select
t1.name,
t3.title
from Students t1
inner join Students2Courses t2
on t1.id = t2.students_id
inner join Courses t3
on t3.id = t2.course_id;
-- 5. Выведите имена всех преподавателей с их компетенциями
select
t1.name,
t3.title
from Teachers t1
inner join Teachers2Competencies t2
on t1.id = t2.teacher_id
inner join Competencies t3
on t2.competencies_id = t3.id;
-- 6. Найти преподавателя, у которого нет компетенций
select
t1.name
from Teachers t1
left join Teachers2Competencies t2
on t1.id = t2.teacher_id
where t2.teacher_id is null ;
-- 7. Найти имена студентов, которые не проходят ни один курс
select
t1.name
from Students t1
left join Students2Courses t2
on t1.id = t2.students_id
where t2.students_id is null;

-- 8. Найти курсы, которые не посещает ни один студент
select
t1.title
from Courses t1
left join Students2Courses t2
on t1.id = t2.course_id
where t2.course_id is null;

-- 9. Найти курсы, которые не посещает ни один студент
select
t1.title
from
Courses t1
left join Students2Courses t2
on t1.id = t2.course_id
where
t2.course_id is null;

-- 10. Найти компетенции, которых нет ни у одного преподавателя
select
t1.title
from
Competencies t1
left join Teachers2Competencies t2 on t1.id = t2.competencies_id
where
t2.competencies_id is null;

-- 11. Вывести название курса и имя старосты
select
t1.title,
t2.name as headman_name
from
Courses t1
join Students t2 on t1.headman_id = t2.id;

-- 12. Вывести имя студента и имена старост, которые есть на курсах, которые он проходит
select
t1.name as student_name,
t3.name as headman_name
from
Students t1
join Courses t2 on t1.id = t2.headman_id
join Students t3 on t2.headman_id = t3.id;