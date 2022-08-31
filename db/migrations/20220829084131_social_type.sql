-- migrate:up
CREATE TABLE `social_type` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type` varchar(100) NOT NULL
)

-- migrate:down

