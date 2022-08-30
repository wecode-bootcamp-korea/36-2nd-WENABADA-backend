-- migrate:up
CREATE TABLE `follow` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `follower_id` int NOT NULL,
    `followee_id` int NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`followee_id`) REFERENCES `users` (`id`)
)

-- migrate:down

