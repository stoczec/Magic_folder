-- ДЗ (база hr)
use hr;
-- 1. Найти департаменты, в которых больше 10 сотрудников
select
t1.department_name,
t2.count_department
from departments t1
inner join (
select department_id, count(department_id) as count_department
from employees
group by department_id
having count_department > 10) t2
on t1.department_id = t2.department_id;
-- 2. Найти департамент с наибольшим кол-вом сотрудников
select
department_name,
count_department
from
(select
t1.department_name,
t2.count_department
from departments t1
inner join (
select department_id, count(department_id) as count_department
from employees
group by department_id) t2
on t1.department_id = t2.department_id) as table_max_count_department
where count_department = (select max(count_department) from 
(select
t1.department_name,
t2.count_department
from departments t1
inner join (
select department_id, count(department_id) as count_department
from employees
group by department_id) t2
on t1.department_id = t2.department_id) as table_max_count_department);

-- 3. Найти департаменты в которых есть работники, зарабатывающие больше 10 000. 
-- В результате выборки формируются два поля (department_id и поле со значениями 1 или 0)
select 
t1.department_id,
max(case
		when salary > 10000 then '1'
		else '0'
	end) as salary_filter
from employees t1
inner join departments t2
on t1.department_id=t2.department_id
group by department_id
order by department_id;
-- 4. Найти департаменты в которых все работники зарабатывают больше 10 000. 
-- В результате выборки формируются два поля (department_id и поле со значениями 1 или 0
select
t1.department_id,
case
when t1.count_department = t2.count_department then '1'
else '0'
end as salary_filter
from (select department_id, count(department_id) as count_department
from employees
group by department_id) t1
left join (select  department_id, count(department_id) as count_department from employees
where salary > 10000
group by department_id
order by department_id) t2
on t1.department_id = t2.department_id
order by department_id;
-- 5. Найти департаменты в которых все работники зарабатывают больше 10 000. 
-- В результате выборки формируются два поля (department_name и поле со значениями 1 или 0)
select
t3.department_name,
case
when t1.count_department = t2.count_department then '1'
else '0'
end as salary_filter
from (select department_id, count(department_id) as count_department
from employees
group by department_id) t1
left join (select  department_id, count(department_id) as count_department from employees
where salary > 10000
group by department_id
order by department_id) t2
on t1.department_id = t2.department_id
inner join departments t3
on t1.department_id = t3.department_id
order by department_name;

