-- migrate:up
ALTER TABLE likes ADD UNIQUE KEY (user_id, product_id)

-- migrate:down

