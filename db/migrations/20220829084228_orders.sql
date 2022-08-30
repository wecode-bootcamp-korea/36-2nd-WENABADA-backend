-- migrate:up
CREATE TABLE `orders` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `address` varchar(100) NOT NULL,
    `seller_id` int NOT NULL,
    `buyer_id` int NOT NULL,
    `product_id` int NOT NULL,
    `payment_method_id` int NOT NULL,
    `order_status_id` int NOT NULL DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`buyer_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
    FOREIGN KEY (`payment_method_id`) REFERENCES `payment_method` (`id`),
    FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`id`)
)

-- migrate:down

