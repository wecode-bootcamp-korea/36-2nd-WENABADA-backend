-- migrate:up
ALTER TABLE comment CHANGE send_id sender_id int

-- migrate:down

