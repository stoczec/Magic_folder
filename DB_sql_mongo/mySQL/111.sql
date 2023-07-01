-- Вывести имя и фамилию покупателей и идентификаторы их заказов. Если у покупателя нет заказов, в поле с заказами вывести фразу "Заказов нет".
-- В выборке должны быть поля name, lastname, order_id

select
t1.name,
t1.lastname,
-- coalesce(t2.id, 'Заказов нет') as order_id
case
	when t2.id is null
		then 'Заказов нет'
    else t2.id
end as order_id
from customers t1
left join orders t2
on t1.id=t2.customer_id;

-- Вывести имя и фамилию покупателей, наименование заказанных продуктов и 
-- сумму заказа. Сумма заказа рассчитывается как произведение стоимости одной 
-- единицы товара и колличество единиц в заказе. 
-- В выборке должны быть поля name, lastname, title, total_price

select
t1.name,
t1.lastname,
t3.title,
t2.amount * t3.price as total_price
from customers t1
left join orders t2
on t1.id = t2.customer_id
left join products t3
on t2.product_id = t3.id;

-- Выведите название товаров, которые ни разу не заказывали. 
-- Для решения данной задачи используйте джоин, а не подзапросы. В выборке должно быть только поле title.
SELECT t1.title
FROM products t1
LEFT JOIN orders t2
ON t1.id = t2.product_id
WHERE t2.product_id IS NULL;

select
*
from products
where id not in (
	select distinct
		product_id
	from orders
);
-- Выведите имя и фамилию покупателя, у которого нет ни одного заказа.

SELECT t1.name, t1.lastname
FROM customers t1
LEFT JOIN orders t2 
ON t1.id = t2.customer_id
WHERE t2.customer_id IS NULL;