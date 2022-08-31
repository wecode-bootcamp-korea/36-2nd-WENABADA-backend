-- migrate:up
CREATE TABLE `comment` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `send_id` int NOT NULL,
    `receive_id` int NOT NULL,
    `product_id` int NOT NULL,
    `comment` text NOT NULL,
    `comment_id` int NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`send_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`receive_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
    FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`)
)
-- migrate:down

