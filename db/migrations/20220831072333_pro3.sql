-- migrate:up
ALTER TABLE products CHANGE last_category_id tertiary_categories_id int

-- migrate:down

