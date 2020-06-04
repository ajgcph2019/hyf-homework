CREATE DATABASE db_meal_sharing;
USE db_meal_sharing;

-- Create all the sql for creating this data model
CREATE TABLE `meal` (		
		`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) NOT NULL UNIQUE,
        `description` text NOT NULL,
        `location` varchar(255) NOT NULL,
        `when_date` DATETIME NOT NULL,
        `max_reservation` INT unsigned NOT NULL,
        `price` DECIMAL(5,2) NOT NULL,
        `created_date` datetime NOT NULL default NOW(),
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (		
		`id` int unsigned NOT NULL AUTO_INCREMENT,
        `number_of_guests` int NOT NULL UNIQUE,
        `meal_id` int unsigned NOT NULL,
        `created_date` datetime NOT NULL default NOW(),
PRIMARY KEY (`id`),
FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (		
		`id` int unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) NOT NULL ,
        `description` text  NOT NULL,
        `meal_id` int unsigned NOT NULL,
        `stars` int unsigned NOT NULL,
         `created_date` datetime NOT NULL default NOW(),
         PRIMARY KEY(`id`) ,
         FOREIGN KEY (`meal_id`) REFERENCES  meal(`id`) ON DELETE CASCADE
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
DROP TABLE reservation;
-- Get all meals
select * from meal;

-- Add a meal
INSERT INTO `meal` (
    `title`,
    `description`,
    `location`,
    `when_date`,
    `max_reservation`, 
    `price`,
    `created_date`
) VALUES (
	'Italian Pizza ',
	'Non veg pizza with sausage and chicken',
    'Jagtvej 1A',
	'2019-12-30 12:30:00',
	5,
	100,
	'2019-12-27 10:30:00'
);
INSERT INTO `meal` (
    `title`,
    `description`,
    `location`,
    `when_date`,
    `max_reservation`, 
    `price`,
    `created_date`
) VALUES (
	'Chicken biriyani',
	'Spicy chicken biriyani',
    'Jagtvej 1A',
	'2019-12-30 12:30:00',
	6,
	150,
	'2019-12-29 16:30:00'
);

INSERT INTO `meal` (
    `title`,
    `description`,
    `location`,
    `when_date`,
    `max_reservation`, 
    `price`,
    `created_date`
) VALUES (
	'Chicken roll',
	'Spicy chicken roll',
    'Jagtvej 1A',
	'2019-12-21 12:30:00',
	3,
	50,
	'2019-12-29 16:30:00'
);

INSERT INTO `meal` (
    `title`,
    `description`,
    `location`,
    `when_date`,
    `max_reservation`, 
    `price`,
    `created_date`
) VALUES (
	'Chicken shawarma',
	'Spicy chicken shawarma',
    'Jagtvej 1A',
	'2019-12-21 12:30:00',
	3,
	150,
	'2019-12-29 16:30:00'
);

-- Get a meal with any id, fx 1
select * from meal where id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal
set title = 'Italian Pizza'
where id = 1;

-- Delete a meal with any id, fx 1
delete from meal 
where id = 1 ;

-- RESERVATION
-- Get all reservations
select * from reservation;
select * from meal;

-- Add a new reservation
INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
	3,
    1,
	'2019-12-27 10:15:00'
);
INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
	5,
	2,
	'2019-12-26 17:15:00'
);
INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
	6,
	3,
	'2019-11-26 08:15:00'
);
select * from reservation;
-- Get a reservation with any id, fx 1
select * from reservation
where id = 2 ;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation set number_of_guests = 7
where id = 2;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE id = 2;

-- Review

-- Get all reviews
select * from review;

-- Add reviews
INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
	'nice ambience',
    'we were very happy with service and food',
    2,
    4,
    DATE(NOW())
);
INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
	'very good',
    'we were very satisfied',
    2,
    5,
    DATE(NOW())
);
INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
	'average food quality',
    'scope for improvement',
    3,
    2,
    DATE(NOW())
);
INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
	'slow service',
    'rude waiters',
    4,
    1,
    DATE(NOW())
);

-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET title = 'awesome meal'
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review 
WHERE id = 1;

-- Additional queries

-- Get meals that has a price smaller than a specific price fx 90
select * from meal;
select * from meal where price < 90;

-- Get meals that still has available reservations
SELECT * FROM reservation 
JOIN meal
	ON meal.id = reservation.meal_id
WHERE number_of_guests < max_reservation;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * FROM meal
WHERE title LIKE "%pizza%";

-- Get meals that has been created between two dates
select * from meal where (created_date BETWEEN '2019-12-20 ' AND '2019-12-30 ');

-- Get only specific number of meals fx return only 5 meals
select * from meal
order by id limit 5;

-- Get the meals that have good reviews

SELECT meal.id, meal.title, meal.location, review.stars, review.title, review.description, review.created_date
FROM meal
INNER JOIN review ON review.meal_id = meal.id
WHERE review.stars >= 4;
        
-- Get reservations for a specific meal sorted by created_date
SELECT * 
FROM reservation
WHERE meal_id = 2
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars) AS `average_rating` FROM meal
INNER JOIN review
ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY review.stars DESC;
        
        