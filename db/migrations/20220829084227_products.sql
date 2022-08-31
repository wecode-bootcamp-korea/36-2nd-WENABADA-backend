-- migrate:up
CREATE TABLE `products` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `product_name` varchar(100) NOT NULL,
    `user_id` int NOT NULL,
    `price` decimal(9, 2) NOT NULL,
    `description` text NOT NULL,
    `address_id` int NOT NULL,
    `image_url` varchar(500) NOT NULL,
    `last_category_id` int NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`last_category_id`) REFERENCES `last_categories` (`id`),
    FOREIGN KEY (`address_id`) REFERENCES `address` (`id`)
)

-- migrate:down

