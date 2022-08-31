-- migrate:up
CREATE TABLE `payment_method` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type` varchar(100) NOT NULL
)

-- migrate:down

