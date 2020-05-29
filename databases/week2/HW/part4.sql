CREATE DATABASE  online_shop;
SET NAMES utf8mb4;

USE online_shop;

CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `reviews_id` int unsigned NOT NULL ,
  `order_id` int unsigned NOT NULL ,
  CONSTRAINT `fk_reviews`  FOREIGN KEY (`reviews_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `order_name` varchar(255) NOT NULL,
  `amount` float,
  `order_status_id` int unsigned NOT NULL,
   CONSTRAINT `fk_order_status` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order_status` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `status_name` varchar(255) NOT NULL,
  `status_id` int unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reviews` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
   `comment` varchar(255)  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;