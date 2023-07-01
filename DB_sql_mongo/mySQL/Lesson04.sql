
-- JOIN (INNER, LEFT, RIGHT) - горизантальное объединение таблиц
select
t1.first_name,
t1.last_name,
t2.item,
t2.amount
from customers t1
inner join orders t2
on t1.customer_id = t2.customer_id;

-- ПРАКТИКА

use hr;

-- 1. Вывести имя, фамилию сотрудника и название департамента, в котором он работает
select 
t1.first_name,
t1.last_name,
t2.department_name
from employees t1
inner join departments t2
on t1.department_id = t2.department_id;

-- 2. Вывести имя, фамилию сотрудника и название его должности
select
t1.first_name,
t1.last_name,
t2.job_title
from employees t1
inner join jobs t2
on t1.job_id = t2.job_id;

-- 3. Вывести имя и фамилию сотрудников, которые работают в департаментах IT, Treasury, IT Support

select
t1.first_name,
t1.last_name,
t2.department_name
from employees t1
left join departments t2
on t1.department_id = t2.department_id
where t2.department_name in ('IT','Treasury','IT Support');

-- 4. Вывести имя, фамилию и город сотрудников, которые работают в Seattle и Toronto

select
t3.first_name,
t3.last_name,
t2.city
from departments t1
inner join locations t2
on t1.location_id = t2.location_id
inner join employees t3
on t1.department_id = t3.department_id
where t2.city in ('Seattle','Toronto');

-- 5. Вывести названия департаментов, в которых никто не работает

select
t1.department_name
from departments t1
left join employees t2
on t1.department_id = t2.department_id
where t2.department_id is null;






