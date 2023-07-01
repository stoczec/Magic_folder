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
-- -----------------
select side_number,
case
	when production_year < 2000 then 'review_old'
    when production_year > 2010 then 'no_review'
    when production_year between 2000 and 2010 then
		case 
			when range_ > 6000 then 'review_mid_long_haul'
			when range_ between 2500 and 6000 then 'review_mid_medium_haul'
			else 'review_mid_short_haul'
		end
end as review_status
from airliners;
-- Определить имена пассажиров и цену билета, класс обслуживания который 'PremiumEconomy'.
-- Примечани: цена билета не должна превышать средние значения среди всех купленных билетов.
-- В выборке должно присутствовать два атрибута - name, price

select * from tickets;

-- Вывести максимальную цену на билет среди рейсовна самолеты с макс дальностью полета.
-- Вывести: max_price
select * from tickets;
-- Вывести количество Надежд ('Nadezhda') на самолетах в пути (Departed).
-- Вывести: hope_count
select * from tickets;

-- ПРАКТИКА
-- 1. Выведите список имен покупателей, которые совершали покупку. Предусмотрите в выборке номер заказа.
-- В выборке должно присутствовать два артибута - cname, order_id
select cname, order_id
from customers t1
inner join orders t2
on  t1.CUST_ID=t2.CUST_ID;
-- 2. Выведите имена покупателей, которые совершили покупку на сумму > 1000 у.е.
-- В выборке должно присутствовать два атрибута - cname, amt.
select cname, amt
from customers t1
inner join orders t2
on  t1.CUST_ID=t2.CUST_ID
where t2.amt > 1000;
-- ДЗ (БД shop)
-- 1. Выведите список имен покупателей, продавцов и итоговую сумму (amt) заказа.
-- В выборке должны присутствовать три атрибута — cname, sname, amt.
select t3.cname, t3.amt, t4.sname from
(select t1.cname, t2.amt, t2.sell_id
from customers t1
inner join orders t2
on t1.CUST_ID=t2.CUST_ID) as t3
inner join sellers t4
on t3.sell_id=t4.sell_id;
-- 2. Интернет-магазину необходимо заполнить отчет по продажам товаров. 
-- Выведите список имен покупателей, которые совершили покупку, а также ее итоговую сумму.
-- Примечание: выборка не должна содержать строки с NULL значением.
-- В выборке должно присутствовать два атрибута — cname, amt.
select t1.CNAME, t2.amt_sum
from customers t1
inner join
(select CUST_ID, sum(AMT) as amt_sum
from orders
group by CUST_ID) as t2
on t1.CUST_ID=t2.CUST_ID;
-- 3. Выведите список всех заказов, сумму, а также имена продавцов.
-- В выборке должны присутствовать три атрибута — order_id, sname, amt.
select t1.order_id, t1.amt, t2.sname
from orders t1
inner join sellers t2
on t1.sell_id=t2.sell_id;
-- 4. Выведите имена покупателей, которые совершили покупку, чья итоговая сумма превышает среднее значение цен в таблице.
-- В выборке должно присутствовать два атрибута — cname, amt.
select t1.cname, t2.amt
from customers t1
inner join orders t2
on t1.CUST_ID=t2.CUST_ID
where t2.AMT > (select avg(amt) from orders);
-- 5. *Выведите имена всех продавцов. Предусмотрите также в выборке имена их боссов, сформировав атрибут boss_name.
-- В выборке должно присутствовать два атрибута — sname, boss_name.

select distinct t3.sname, 
case
	when t4.boss_name is null then 'no boss'
    else t4.boss_name
end as boss_name
from sellers t3
left join 
(select t1.sname as boss_name, t2.BOSS_ID
from sellers t1
inner join sellers t2
on t1.SELL_ID=t2.BOSS_ID) as t4
on t4.BOSS_ID=t3.BOSS_ID;

select * from orders;
select *from customers;
select *from sellers;