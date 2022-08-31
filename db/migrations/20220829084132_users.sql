-- migrate:up
CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `social_id` bigint NOT NULL,
    `social_type_id` int NOT NULL DEFAULT 1,
    `sold_amount` int NULL,
    `recently_product_id` int NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`social_type_id`) REFERENCES `social_type` (`id`)
)
-- migrate:down

