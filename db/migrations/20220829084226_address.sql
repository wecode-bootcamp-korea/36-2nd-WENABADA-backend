-- migrate:up
CREATE TABLE `address` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `address` varchar(100) NOT NULL
)

-- migrate:down

