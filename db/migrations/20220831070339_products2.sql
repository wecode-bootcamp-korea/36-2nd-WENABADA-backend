-- migrate:up
ALTER TABLE products MODIFY image_url varchar(2000)

-- migrate:down
