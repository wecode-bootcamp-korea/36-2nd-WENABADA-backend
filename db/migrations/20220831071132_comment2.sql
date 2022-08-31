-- migrate:up
ALTER TABLE comment CHANGE receive_id receiver_id int

-- migrate:down

