-- migrate:up
CREATE TABLE `sub_categories` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category` varchar(100) NOT NULL,
    `main_category_id` int NOT NULL,
    FOREIGN KEY (`main_category_id`) REFERENCES `main_categories` (`id`)
)

-- migrate:down

