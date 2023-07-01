
-- Для товаров до 10 EUR установить категорию 8 и применить наценку в 20%.
UPDATE Products
SET 
CategoryID = 8,
Price = Price * 1.2
WHERE Price <= 10;
-- Добавить два поставщика из Spain с произвольными номерами телефонов.
INSERT INTO Suppliers(SupplierID,SupplierName,ContactName,Address,City,PostalCode,Country,Phone)
VALUES
		(31, 'Spanish Export Center', 'Alfonso Garcia','Prado Street, 123','Madrid','28001','Spain','+34 912345678'),
        (32, 'Iberian Products', 'Carmen Sanchez','Rambla Square, 45','Barcelona','08001','Spain','+34 934567890');
        
 -- Удалить поставщиков из USA и Germany.       
DELETE FROM Suppliers
WHERE Country IN ('USA', 'Germany');

-- Вывести все товары до 20 EUR из категорий 3 и 6 по убыванию цены.
SELECT * FROM Products
WHERE CategoryID IN (3,6)
ORDER BY Price DESC;
-- Вывести три самых дорогих товара до 200 EUR.
SELECT * FROM Products
WHERE Price <= 200
ORDER BY Price DESC
LIMIT 3;