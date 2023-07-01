-- Вывести название и стоимость в USD одного самого дорогого проданного товара
select t1.ProductName, t1.Price from products t1
inner join order_details t2
on t1.ProductID = t2.ProductID
order by Price desc
limit 1;

-- Вывести два самых дорогих товара из категории Beverages из USA
select t2.ProductName, t2.Price 
from
(select SupplierID as SupplierID_USA  from suppliers where Country = 'USA') as t1
inner join products t2
on t1.SupplierID_USA = t2.SupplierID
inner join
(select CategoryID from categories where CategoryName = 'Beverages') as t3
on t2.CategoryID = t3.CategoryID
order by Price desc
limit 2;

-- Вывести заказы, добавив поле доставлено (или нет), учитывая, что доставлены только 10248 и 10249
select *,
	case
	 when OrderID in (10248, 10249) then 'ДОСТАВЛЕНО'
	 else 'НЕ ДОСТАВЛЕНО'
	end as Delivery
from orders;
-- Вывести список стран, которые поставляют морепродукты
select distinct t1.Country
from suppliers t1
inner join products t2
on t1.SupplierID = t2.SupplierID
inner join
(select CategoryID from categories where CategoryName = 'Seafood') as t3
on t2.CategoryID = t3.CategoryID;
-- Очистить поле ContactName у всех клиентов не из China
SET SQL_SAFE_UPDATES = 1;

update customers
set ContactName = ''
where Country != 'China';
