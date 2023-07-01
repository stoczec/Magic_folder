-- Агрегационные функции
-- count() - считает количество не null строк
-- min() - находит минимальное значение
-- max() - находит максимальное значение
-- sum() - находит сумму значений
-- avg() - находит среднее значение

-- Вывести всех покупателей (имя, фамилия, возраст) чей возраст выше среднего

select
 first_name,
    last_name,
    age
from customers
where age > (select avg(age) from customers);

-- Найти сумму возрастов клиентов в разбивке по странам

select
 country,
 sum(age) as sum_age
from customers
group by country;
-- Найти средний возраст всех клиентов из USA и UK

select
 country,
 avg(age) as avg_age
from customers
where country in ('USA', 'UK')
group by country;
-- ----------------------------------------------------------------------------------------
-- PRACTICE
use hr;
-- 1. Найти имя, фамилию и зп сотрудника с самой высокой зарплато
select first_name, last_name, salary
from `employees`
where salary = (select max(salary) from employees);
-- 2. Найти кол-во сотрудников в каждом департаменте. Вывести кол-во сотрудников employees_cnt и department_id
select department_id, count(employee_id) as employees_count
from employees
group by department_id
order by department_id;
-- 3. Найти кол-во сотрудников в каждом департаменте. Вывести кол-во сотрудников employees_cnt и department_name
select t2.department_name, count(*) as employees_count
from employees t1
left join departments t2
on t1.department_id = t2.department_id
group by t2.department_name
order by t2.department_name;
-- 4. Найти сотрудников (имя, фамилия, зарплата), у которых максимальная зарплата в их департаментах
select 
t1.first_name,
t1.last_name,
t1.salary
from employees t1
inner join (select department_id, max(salary) as max_salary
			from employees
			group by department_id) t2
on t1.department_id = t2.department_id
and t1.salary = t2.max_salary;
-- HAVING
-- Найти покупателей (имя, фамилия, средний amount), у которых среднний amount >= 400
select 
t1.first_name,
t1.last_name,
t2.avg_amount
from Customers t1
inner join (select customer_id, avg(amount) as avg_amount
from orders
group by customer_id
having avg_amount >= 400) t2
on t1.customer_id = t2.customer_id;
-- CASE
select first_name, last_name,
case
	when age >= 25 then 'adult'
    else 'young'
end status
from Customers;
-- Найти сумму возрастов всех покупателей старше 25 (>=25)
select
 sum(
     case
        when age < 25 then 0
        else age
       end
    ) as sum_age
from customers;
-- 5. Разделите самолеты на ближне-, средне- и дальнемагистральные. 
-- Ближнемагистральными будем считать самолеты, дальность полета которых > 1000 км и <= 2500 км. 
-- Среднемагистральными — с дальностью полета > 2500 км и <= 6000 км. 
-- Дальнемагистральными — с дальностью полета > 6000 км. 
-- В выборке должно быть два столбца, где в первом указана модель самолета. 
-- Во втором, category, — категория, со значениями short-haul, medium-haul, long-haul (ближне-, средне- и дальнемагистральные соответственно). Если максимальная дальность полета <= 1000 км или данных о дальности полета нет, в category выведите 'UNDEFINED'.
-- В выборке должны присутствовать два атрибута — model_name, category.
use airport;

select model_name,
case
	when range_ between 1000 and 2500 then 'short-haul'
    when range_ between 2500 and 6000 then 'medium-haul'
    when range_ > 6000 then 'long-haul'
    else 'UNDEFINED'
end as category
from airliners;












