-- migrate:up
CREATE TABLE `review` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `review` text NOT NULL,
    `order_id` int NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
)

-- migrate:down

