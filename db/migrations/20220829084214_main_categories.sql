-- migrate:up
CREATE TABLE `main_categories` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category` varchar(100) NOT NULL
)

-- migrate:down

