
INSERT INTO products (name, description, price, imageUrl)
values ($1, $2, $3, $4)
RETURNING *;