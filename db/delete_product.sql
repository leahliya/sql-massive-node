DELETE FROM products 
WHERE productid = $1
RETURNING *;