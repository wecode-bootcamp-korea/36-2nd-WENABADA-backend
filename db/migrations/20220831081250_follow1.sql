-- migrate:up
ALTER TABLE follow ADD UNIQUE KEY (follower_id, followee_id)

-- migrate:down

