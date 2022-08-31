-- migrate:up
ALTER TABLE products CHANGE product_name name varchar(100)

-- migrate:down