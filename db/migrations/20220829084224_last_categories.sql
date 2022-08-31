-- migrate:up
CREATE TABLE `last_categories` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category` varchar(100) NOT NULL,
    `sub_category_id` int NOT NULL,
    FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`)
)

-- migrate:down

