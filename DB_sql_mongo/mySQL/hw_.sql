-- Найти департаменты в которых есть работники, зарабатывающие больше 10 000. 
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
-- Найти департаменты в которых все работники зарабатывают больше 10 000. 
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
-- 5*. Вывести сотрудников, работающих в департаментах с id 60, 90 и 110, 
-- отсортированными в алфавитном порядке по фамилии (оператор in).
select last_name from employees
where department_id in (60,90,110)
order by last_name;
-- Вывести сотрудников с jobid STCLERK, отсортированными по зарплате - от самой большой зарплаты до самой маленькой.
select last_name from employees
where job_id = 'ST_CLERK'
order by salary DESC;
-- Выведите данные о билетах разной ценовой категории. 
-- Среди билетов экономкласса (Economy) добавьте в выборку билеты с ценой от 10 000 до 11 000 включительно. 
-- Среди билетов комфорт-класса (PremiumEconomy) — билеты с ценой от 20 000 до 30 000 включительно. 
-- Среди билетов бизнес-класса (Business) — с ценой строго больше 100 000. В решении необходимо использовать оператор CASE.
-- В выборке должны присутствовать три атрибута — id, service_class, price.

select * from
(select id,service_class,
case
	when service_class = 'Economy' && price between 10000 and 11000 then price
    when service_class = 'PremiumEconomy' && price between 20000 and 30000 then price
    when service_class = 'Business' && price > 100000 then price
    end as price
from tickets) as sort_tickets
where price is not null;
-- Разделите самолеты на три класса по возрасту. Если самолет произведен раньше 2000 года, то отнесите его к классу 'Old'. 
-- Если самолет произведен между 2000 и 2010 годами включительно, то отнесите его к классу 'Mid'. 
-- Более новые самолеты отнесите к классу 'New'. 
-- Исключите из выборки дальнемагистральные самолеты с максимальной дальностью полета больше 10000 км. 
-- Отсортируйте выборку по классу возраста в порядке возрастания.
-- В выборке должны присутствовать два атрибута — side_number, age.
select side_number,
case
	when production_year < 2000 then 'Old'
    when production_year between 2000 and 2010 then 'Mid'
    when production_year > 2010 then 'New'
    end as age
 from airliners
 where range_ < 10000
 order by age;
-- Руководство авиакомпании снизило цены на билеты рейсов LL4S1G8PQW, 0SE4S0HRRU и JQF04Q8I9G. 
-- Скидка на билет экономкласса (Economy) составила 15%, на билет бизнес-класса (Business) — 10%, 
-- а на билет комфорт-класса (PremiumEconomy) — 20%. Определите цену билета в каждом сегменте с учетом скидки.
-- В выборке должны присутствовать три атрибута — id, tripid, newprice.
select * from
(select id, trip_id,
case
when trip_id in ('LL4S1G8PQW','0SE4S0HRRU','JQF04Q8I9G')
and service_class = 'Economy' then price-(price*0.15)
when trip_id in ('LL4S1G8PQW','0SE4S0HRRU','JQF04Q8I9G')
and service_class = 'Business' then price-(price*0.1)
when trip_id in ('LL4S1G8PQW','0SE4S0HRRU','JQF04Q8I9G')
and service_class = 'PremiumEconomy' then price-(price*0.2)
end as newprice
from tickets) as sort_newprice
where newprice is not null;







